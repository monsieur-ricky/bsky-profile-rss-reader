import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'bpr-feed-item',
  imports: [DatePipe],
  template: `
    <div class="rounded-xl backdrop-blur-sm bg-white/50 p-4 shadow-xl mb-7">
      <h2 class="text-sm font-bold mb-2 text-white">
        {{ date() | date : 'dd-MM-yyyy hh:mm' }}
      </h2>
      <p class="text-slate-700" [innerHTML]="parsedDescription()"></p>
      <a
        target="_blank"
        class="block mt-3 text-sm text-slate-700"
        [href]="link()"
        >View Post</a
      >
    </div>
  `,
  styles: ``
})
export class FeedItemComponent {
  description = input.required<string>();
  date = input.required<string>();
  link = input.required<string>();

  parsedDescription = computed(() =>
    this.#transformTextToHtml(this.description())
  );

  #transformTextToHtml(text: string): string {
    const cssClass = `font-bold underline underline-offset-2 transition-all ease-in-out duration-300 text-slate-700 hover:text-cyan-700`;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      `<a href="$1" target="_blank" class="${cssClass}">$1</a>`
    );
  }
}
