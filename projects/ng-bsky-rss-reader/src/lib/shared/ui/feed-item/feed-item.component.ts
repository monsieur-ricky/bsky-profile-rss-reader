import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'bpr-feed-item',
  imports: [DatePipe],
  template: `
    <a
      target="_blank"
      class="block border border-slate-100 rounded-md bg-slate-50 p-3 drop-shadow-md hover:drop-shadow-xl hover:bg-white hover:border-slate-100 hover:scale-[1.03] transition ease-in-out duration-300"
      [href]="link()"
    >
      <h2 class="text-xs mb-1 text-slate-600">
        {{ date() | date : 'dd-MM-yyyy hh:mm' }}
      </h2>
      <p class="text-xs text-slate-900" [innerHTML]="description()"></p>
    </a>
  `,
  styles: ``
})
export class FeedItemComponent {
  description = input.required<string>();
  date = input.required<string>();
  link = input.required<string>();
}
