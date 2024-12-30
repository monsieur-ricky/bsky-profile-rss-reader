import { Component, computed, inject, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedListComponent } from './shared/ui/feed-list/feed-list.component';
import { RssFeedHttpService } from './shared/http/rss-feed.http';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './shared/ui/input-field/input-field.component';
import {
  formatDescription,
  removeHandleFromProfile
} from './shared/utils/utils';

@Component({
  selector: 'bpr-root',
  imports: [RouterOutlet, FormsModule, FeedListComponent, InputFieldComponent],
  template: `
    <div class="container w-full h-1 md:w-[800px] mx-auto">
      <h1 class="text-3xl font-bold text-center py-4">{{ title }}</h1>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 md:flex-initial md:w-72 h-[calc(100vh-130px)] p-5">
          <div class="block mb-5">
            <bpr-input-field
              class="flex-1"
              label="Profile Handle or ID"
              [(value)]="profile"
            />
          </div>

          <div class="block">
            <h2 class="text-2xl font-bold py-2">
              <span>👉</span>
              <a class="ml-1" target="_blank" [href]="profileInfo().link">
                {{ profileInfo().title }}
              </a>
            </h2>

            <p [innerHTML]="profileInfo().description"></p>
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

  title = 'BlueSky Profile RSS Reader';
}
