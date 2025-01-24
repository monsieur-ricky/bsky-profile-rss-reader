import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bpr-input-field',
  imports: [FormsModule],
  template: `
    <div>
      <label class="block text-sm mb-1" for="value"> {{ label() }}: </label>
      <input
        id="value"
        name="value"
        class="bg-white/50 drop-shadow-md focus:border-none hover:bg-white/80 text-slate-700 rounded-md w-full h-9 p-2 focus:outline-hidden transition ease-in-out duration-300"
        [(ngModel)]="value"
      />
    </div>
  `,
  styles: ``
})
export class InputFieldComponent {
  label = input.required<string>();
  value = model.required<string>();
}
