import { Component } from '@angular/core';
import { NgBskyRssReaderComponent } from 'ng-bsky-rss-reader';

@Component({
  selector: 'bpr-root',
  imports: [NgBskyRssReaderComponent],
  template: `
    <h1 class="font-bold py-4 text-center text-2xl">{{ title }}</h1>
    <lib-ng-bsky-rss-reader profileId="ricky.pt" />
  `,
  styles: ``
})
export class AppComponent {
  title = 'BlueSky Profile RSS Reader';
}
