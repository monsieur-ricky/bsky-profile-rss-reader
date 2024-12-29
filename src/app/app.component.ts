import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bpr-root',
  imports: [RouterOutlet],
  template: `
    <h1 class="text-3xl font-bold text-center py-4">Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styles: []
})
export class AppComponent {
  title = 'bsky-profile-rss-reader';
}
