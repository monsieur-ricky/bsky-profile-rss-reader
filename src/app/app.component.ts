import { Component, signal } from '@angular/core';
import { NgBskyRssReaderComponent } from 'ng-bsky-rss-reader';
import { InputFieldComponent } from './shared/ui/input-field/input-field.component';

@Component({
  selector: 'bpr-root',
  imports: [NgBskyRssReaderComponent, InputFieldComponent],
  template: `
    <div class="container mx-auto py-0 px-4 md:px-0 w-full md:w-[450px]">
      <h1 class="font-bold py-4 text-center text-2xl">{{ title }}</h1>

      <bpr-input-field label="Profile Handle or ID" [(value)]="profile" />
    </div>

    <div
      class="px-4 md:px-0 h-[calc(100vh-130px)] md:h-[calc(100vh-180px)] w-screen flex items-center justify-center"
    >
      <div class="h-[500px] w-full md:w-[450px]">
        <lib-ng-bsky-rss-reader [profileId]="profile()" />
      </div>
    </div>
  `,
  styles: ``
})
export class AppComponent {
  profile = signal('ricky.pt');

  title = 'BlueSky Profile RSS Reader';
}
