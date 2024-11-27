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

  toggleResponsiveMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }

  toggleLanguage() {
    
  }

}
