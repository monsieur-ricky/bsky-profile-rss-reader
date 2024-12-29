import { Component, input } from '@angular/core';

@Component({
  selector: 'bpr-feed-item',
  imports: [],
  template: `
    <div
      class="border-gray-200 border rounded-xl bg-gray-100 p-4 shadow-xl mb-7"
    >
      <h2 class="text-sm font-bold">{{ date() }}</h2>
      <p>{{ description() }}</p>
      <a [href]="link()" class="text-sm">View Post</a>
    </div>
  `,
  styles: ``
})
export class FeedItemComponent {
  description = input.required<string>();
  date = input.required<string>();
  link = input.required<string>();
}
