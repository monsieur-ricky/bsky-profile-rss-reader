import { Component } from '@angular/core';
import { NgBskyRssReaderComponent } from 'ng-bsky-rss-reader';

@Component({
  selector: 'bpr-root',
  imports: [NgBskyRssReaderComponent],
  template: `
    <h1 class="font-bold py-4 text-center text-2xl">{{ title }}</h1>
    <div
      class="h-[calc(100vh-100px)] w-screen flex items-center justify-center"
    >
      <div class="h-[500px] w-[450px]">
        <lib-ng-bsky-rss-reader profileId="ricky.pt" />
      </div>
    </div>
  `,
  styles: ``
})
export class AppComponent {
  title = 'BlueSky Profile RSS Reader';
}
