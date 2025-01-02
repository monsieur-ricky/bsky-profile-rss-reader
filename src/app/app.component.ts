import { Component, signal } from '@angular/core';
import { NgBskyRssReaderComponent } from 'ng-bsky-rss-reader';
import { InputFieldComponent } from './shared/ui/input-field/input-field.component';

@Component({
  selector: 'bpr-root',
  imports: [NgBskyRssReaderComponent, InputFieldComponent],
  template: `
    <div class="container mx-auto py-4 w-[450px]">
      <h1 class="font-bold py-4 text-center text-2xl">{{ title }}</h1>

      <bpr-input-field label="Profile Handle or ID" [(value)]="profile" />
    </div>

    <div
      class="h-[calc(100vh-200px)] w-screen flex items-center justify-center"
    >
      <div class="h-[500px] w-[450px]">
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
