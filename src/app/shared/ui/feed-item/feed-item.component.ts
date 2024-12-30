import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { formatDescription } from '../../utils/utils';

@Component({
  selector: 'bpr-feed-item',
  imports: [DatePipe],
  template: `
    <a
      target="_blank"
      class="block rounded-xl backdrop-blur-sm bg-white/50 p-4 drop-shadow-md hover:drop-shadow-xl hover:bg-white/80 hover:scale-[1.03] transition ease-in-out duration-300"
      [href]="link()"
    >
      <h2 class="text-sm font-bold mb-2 text-slate-700">
        {{ date() | date : 'dd-MM-yyyy hh:mm' }}
      </h2>
      <p class="text-slate-700" [innerHTML]="parsedDescription()"></p>
    </a>
  `,
  styles: ``
})
export class FeedItemComponent {
  description = input.required<string>();
  date = input.required<string>();
  link = input.required<string>();

  parsedDescription = computed(() => formatDescription(this.description()));
}
