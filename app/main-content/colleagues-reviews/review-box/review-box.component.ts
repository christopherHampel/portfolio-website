import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-review-box',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './review-box.component.html',
  styleUrl: './review-box.component.scss'
})
export class ReviewBoxComponent {

  @Input() reviews: { name: string; review: string } = { name: '', review: '' };
  @Input() isActive: boolean = false;

}
