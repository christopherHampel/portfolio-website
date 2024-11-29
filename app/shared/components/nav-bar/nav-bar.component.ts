import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavBurgerMenuComponent } from './nav-burger-menu/nav-burger-menu.component';
import { AppComponent } from '../../../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

CommonModule

@Component({
  selector: 'app-nav-bar',
  standalone: true,

imports: [ NgClass, NavBurgerMenuComponent, TranslateModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  currentLanguage:string = 'de';
  private translateService = inject(TranslateService);

  // changeLang() {
  //   console.log(this.appComponent.changeLang());
  // }

  changeLanguage(language:string) {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translateService.use(this.currentLanguage);
    // localStorage.setItem('language', this.currentLanguage);
  }

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

  onMenuToggle(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}