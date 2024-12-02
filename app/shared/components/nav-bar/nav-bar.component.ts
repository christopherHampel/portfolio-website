import { NgClass, NgIf } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { NavBurgerMenuComponent } from './nav-burger-menu/nav-burger-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LogoComponent } from '../../logo/logo.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,

imports: [ NgClass, NavBurgerMenuComponent, TranslateModule, LogoComponent ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  currentLanguage:string = 'en';
  private translateService = inject(TranslateService);

  constructor() {
    const language = localStorage.getItem('english?');
    const currentLanguage = localStorage.getItem('english?');
    this.english = language ? JSON.parse(language) : true;
    this.currentLanguage = currentLanguage ? JSON.parse(currentLanguage) : true;
  }

  english:boolean = true;
  isMenuOpen: boolean = false;

  changeLanguage() {
    this.toggleLanguage();
    this.translateService.use(this.currentLanguage);
  }

  toggleLanguage() {
    if(this.english) {
      this.english = false;
      this.currentLanguage = 'de';
    } else {
      this.english = true;
      this.currentLanguage = 'en';
    }
    localStorage.setItem('english?', JSON.stringify(this.english));
    localStorage.setItem('language', this.currentLanguage);
  }

  toggleResponsiveMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}