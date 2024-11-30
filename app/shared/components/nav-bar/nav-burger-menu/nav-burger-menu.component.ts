import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-burger-menu',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass],
  templateUrl: './nav-burger-menu.component.html',
  styleUrl: './nav-burger-menu.component.scss'
})
export class NavBurgerMenuComponent {

  @Input() isMenuOpen!: boolean;
  @Output() menuToggle = new EventEmitter<boolean>();

  @Input() english!: boolean;
  @Output() englishChange = new EventEmitter<boolean>();

  @Output() languageChange = new EventEmitter<string>();

  toggleResponsiveMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }

  changeLanguageBurgermenu() {
    this.english = !this.english;
    this.englishChange.emit(this.english);
    this.languageChange.emit();

    // console.log(this.english);
  }
}
