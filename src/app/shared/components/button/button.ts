import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'alternative';

const buttonStyles: Record<ButtonType, string> = {
  primary:
    'bg-secondary text-white px-10 py-4 text-lg hover:scale-105 font-light transition-all duration-300 hover:shadow-xl cursor-pointer text-nowrap',
  secondary:
    'bg-primary text-white px-10 py-4 text-lg font-light transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden cursor-pointer text-nowrap',
  tertiary:
    'border-[1px] border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-light transition-all duration-300 cursor-pointer text-nowrap',
  alternative:
    'border-[1px] border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-light transition-all duration-300 hover:shadow-xl cursor-pointer text-nowrap',
};

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  buttonText = input('');
  disabled = input(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  style = input<ButtonType>('primary');

  getButtonClass(): string {
    return buttonStyles[this.style()];
  }
}
