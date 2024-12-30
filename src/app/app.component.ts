import { Component, computed, inject, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedListComponent } from './shared/ui/feed-list/feed-list.component';
import { RssFeedHttpService } from './shared/http/rss-feed.http';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './shared/ui/input-field/input-field.component';

@Component({
  selector: 'bpr-root',
  imports: [RouterOutlet, FormsModule, FeedListComponent, InputFieldComponent],
  template: `
    <div class="container w-full h-1 md:w-[800px] mx-auto">
      <h1 class="text-3xl font-bold text-center py-4">{{ title }}</h1>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 md:flex-initial md:w-72 h-[calc(100vh-130px)] p-5">
          <div class="flex items-end">
            <bpr-input-field
              class="flex-1"
              label="Profile Handle or ID"
              [(value)]="profile"
            />
          </div>
        </div>
        <div class="flex-1 h-[calc(100vh-130px)]">
          <bpr-feed-list [feed]="feed()" [loading]="loading()" />
        </div>
      </div>

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
