import { Component, input } from '@angular/core';
import { FeedItemComponent } from '../feed-item/feed-item.component';
import { RssFeed } from '../../models/rss-feed.model';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'bpr-feed-list',
  imports: [FeedItemComponent, PreloaderComponent],
  template: `
    <section class="relative p-5 overflow-y-auto h-full">
      <bpr-preloader [loading]="loading()" />

      @for (item of feed() ; track item.link) {
      <bpr-feed-item
        class="block mb-5 last:mb-0"
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
  loading = input.required<boolean>();
}
