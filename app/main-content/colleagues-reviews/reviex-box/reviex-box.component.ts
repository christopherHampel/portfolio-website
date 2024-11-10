import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-reviex-box',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './reviex-box.component.html',
  styleUrl: './reviex-box.component.scss'
})
export class ReviexBoxComponent {

  @Input() reviews: { name: string; review: string } = { name: '', review: '' };
  @Input() isActive: boolean = false;

}
