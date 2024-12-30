import { Component, computed, inject, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedListComponent } from './shared/ui/feed-list/feed-list.component';
import { RssFeedHttpService } from './shared/http/rss-feed.http';

@Component({
  selector: 'bpr-root',
  imports: [RouterOutlet, FeedListComponent],
  template: `
    <div class="container w-full md:w-[450px] mx-auto">
      <h1 class="text-3xl font-bold text-center py-4">{{ title }}</h1>
      <bpr-feed-list [feed]="feed()" />
      <router-outlet />
    </div>
  `,
  styles: []
})
export class AppComponent {
  readonly #http = inject(RssFeedHttpService);

  profile = signal('ricky.pt');

  feedResource = resource({
    request: this.profile,
    loader: (param) => {
      console.log(param);
      return this.#http.loadFeed(param.request);
    }
  });

  feed = computed(() => this.feedResource.value() ?? []);
  loading = this.feedResource.isLoading;
  error = this.feedResource.error;

  title = 'BlueSky Profile RSS Reader';

  onRefreshFeed(): void {
    this.feedResource.reload();
  }
}
