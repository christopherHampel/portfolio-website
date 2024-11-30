import { NgClass, NgIf } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { NavBurgerMenuComponent } from './nav-burger-menu/nav-burger-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,

imports: [ NgClass, NavBurgerMenuComponent, TranslateModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor() {
    const language = localStorage.getItem('english?');
    this.english = language ? JSON.parse(language) : true;
    console.log(this.english);
  }

  english:boolean = true;
  isMenuOpen: boolean = false;

  currentLanguage:string = 'en';
  private translateService = inject(TranslateService);

  changeLanguage() {
    this.toggleLanguage();
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translateService.use(this.currentLanguage);
    localStorage.setItem('language', this.currentLanguage);
  }

  toggleLanguage() {
    if(this.english) {
      this.english = false;
    } else {
      this.english = true;
    }
    localStorage.setItem('english?', JSON.stringify(this.english));
  }

  toggleResponsiveMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}