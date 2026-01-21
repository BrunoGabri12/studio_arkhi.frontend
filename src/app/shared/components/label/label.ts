import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

export type LabelType = 'title' | 'subtitle' | 'base' | 'detail';

@Component({
  selector: 'app-label',
  imports: [NgClass],
  templateUrl: './label.html',
  styleUrl: './label.css',
})
export class Label {
  text = input<string>('');
  type = input<LabelType>('base');
  extraClass = input<string>('');
}
