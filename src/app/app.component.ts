import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedListComponent } from './shared/ui/feed-list/feed-list.component';

@Component({
  selector: 'bpr-root',
  imports: [RouterOutlet, FeedListComponent],
  template: `
    <h1 class="text-3xl font-bold text-center py-4">Welcome to {{ title }}!</h1>

    <bpr-feed-list />

    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'bsky-profile-rss-reader';
}
