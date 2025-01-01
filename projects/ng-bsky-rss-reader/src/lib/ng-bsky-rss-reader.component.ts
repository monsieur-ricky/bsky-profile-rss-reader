import {
  Component,
  computed,
  inject,
  model,
  output,
  resource
} from '@angular/core';
import { RssFeedHttpService } from './shared/http/rss-feed.http';
import { FeedData } from './shared/models/rss-feed.model';
import {
  formatDescription,
  removeHandleFromProfile,
  wait
} from './shared/utils/utils';
import { InputFieldComponent } from './shared/ui/input-field/input-field.component';
import { FeedListComponent } from './shared/ui/feed-list/feed-list.component';

@Component({
  selector: 'lib-ng-bsky-rss-reader',
  imports: [FeedListComponent],
  template: `
    <div class="h-screen w-screen flex items-center justify-center">
      <div class="bg-white py-5 px-1 rounded-2xl shadow-lg h-[80vh] w-[500px]">
        <section
          id="profileDescription"
          class="px-4 mb-2 h-[70px] overflow-hidden"
        >
          <h1 class="text-black text-md font-bold">
            {{ profileInfo().title }}
          </h1>
          <p
            class="text-black text-xs"
            [innerHTML]="profileInfo().description"
          ></p>
        </section>

        <section
          id="feedList"
          class="relative p-4 overflow-y-auto h-[calc(100%-70px)]"
        >
          <bpr-feed-list [feed]="feed()" [loading]="loading()" />
        </section>
      </div>
    </div>
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

  feedResource = resource({
    request: this.profileId,
    loader: async (param) => {
      // Debouncing: 500 ms
      await wait(500, param.abortSignal);

      return this.#http.loadFeed(param.request);
    }
  });

  loading = this.feedResource.isLoading;
  error = this.feedResource.error;

  feed = computed(() => this.feedResource.value()?.feed ?? []);
  profileInfo = computed(() => {
    const profile = this.feedResource.value()?.profile;

    return {
      title: removeHandleFromProfile(profile?.title ?? ''),
      description: formatDescription(profile?.description ?? ''),
      link: profile?.link ?? ''
    };
  });
}
