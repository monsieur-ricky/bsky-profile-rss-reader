import {
  Component,
  computed,
  ElementRef,
  inject,
  model,
  output,
  resource,
  viewChild
} from '@angular/core';
import { RssFeedHttpService } from './shared/http/rss-feed.http';
import { FeedData } from './shared/models/rss-feed.model';
import { formatHandle } from './shared/utils/utils';
import { FeedListComponent } from './shared/ui/feed-list/feed-list.component';

@Component({
  selector: 'lib-ng-bsky-rss-reader',
  imports: [FeedListComponent],
  template: `
    <section class="bg-white py-5 px-1 rounded-2xl shadow-lg h-full w-full">
      @if (profileInfo().title) {
      <div
        #profileDescription
        id="profileDescription"
        class="px-4 mb-2 max-h-20 overflow-hidden"
      >
        <h1 class="text-black text-md font-bold">
          {{ profileInfo().title }}
        </h1>
        <p
          class="text-black text-xs text-ellipsis overflow-hidden"
          [innerHTML]="profileInfo().description"
        ></p>
      </div>

      <div
        id="feedList"
        class="relative p-4 overflow-y-auto"
        [style.height]="feedContainerHeight()"
      >
        <bpr-feed-list [feed]="feed()" [loading]="loading()" />
      </div>
      } @else {
      <span class="text-black text-md font-bold">No profile found</span>
      }
    </section>
  `,
  styles: `
    * {
      scrollbar-color: #cccccc transparent;
      scrollbar-width: thin;
    }

    #feedList {
      mask-image: linear-gradient(to bottom, transparent, black 3%, black 97%, transparent);
      -webkit-mask-image: linear-gradient(to bottom, transparent, black 3%, black 97%, transparent);
      
      mask-composite: exclude;
      -webkit-mask-composite: destination-in;
    }
  `
})
export class NgBskyRssReaderComponent {
  readonly #http = inject(RssFeedHttpService);

  profileId = model.required<string>();

  feedData = output<FeedData | undefined>();

  profileDescription = viewChild<ElementRef>('profileDescription');

  feedResource = resource({
    request: this.profileId,
    loader: async (param) => {
      //TODO: Debouncing: 500 ms

      return this.#http.loadFeed(param.request);
    }
  });

  loading = this.feedResource.isLoading;
  error = this.feedResource.error;

  feed = computed(() => this.feedResource.value()?.feed ?? []);

  profileInfo = computed(() => {
    const profile = this.feedResource.value()?.profile;

    return {
      title: formatHandle(profile?.title),
      description: profile?.description,
      link: profile?.link
    };
  });

  feedContainerHeight = computed(() => {
    const profileElm = this.profileDescription()?.nativeElement;
    const elmHeight = profileElm.clientHeight + 'px';

    return `calc(100% - ${elmHeight})`;
  });
}
