import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
CommonModule

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ NgClass, NgIf ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  english:boolean = true;
  isMenuOpen: boolean = false;

  toggleLanguage() {
    if(this.english) {
      this.english = false;
    } else {
      this.english = true;
    }
  }

  toggleResponsiveMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }
}