import { Component, input } from '@angular/core';
import { FeedItemComponent } from '../feed-item/feed-item.component';
import { RssFeed } from '../../models/rss-feed.model';

@Component({
  selector: 'bpr-feed-list',
  imports: [FeedItemComponent],
  template: `
    <section class="rounded-xl p-5">
      <h1 class="text-2xl font-bold mb-5">Feed List</h1>

      @for (item of feed() ; track item.link) {
      <bpr-feed-item
        [date]="item.date"
        [description]="item.description"
        [link]="item.link"
      />
      }
    </section>
  `,
  styles: ``
})
export class FeedListComponent {
  feed = input.required<RssFeed[]>();
}
