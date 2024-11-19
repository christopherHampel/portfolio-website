import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  english:boolean = true;

  toggleLanguage() {
    if(this.english) {
      this.english = false;
    } else {
      this.english = true;
    }
  }
}
