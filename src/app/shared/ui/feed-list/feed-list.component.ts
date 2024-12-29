import { Component } from '@angular/core';
import { FeedItemComponent } from '../feed-item/feed-item.component';

@Component({
  selector: 'bpr-feed-list',
  imports: [FeedItemComponent],
  template: `
    <section class="rounded-xl p-5">
      <h1 class="text-2xl font-bold mb-5">Feed List</h1>

      <bpr-feed-item
        date="30-12-2024"
        description="Hello world..."
        link="https://google.com"
      />
    </section>
  `,
  styles: ``
})
export class FeedListComponent {}
