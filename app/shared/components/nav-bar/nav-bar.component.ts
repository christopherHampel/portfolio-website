import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  image_select_english = 'assets/img/language_swicth_english.png';
  image_select_german = 'assets/img/language_switch_german.png';

  currentImage = this.image_select_english;

  toggleLanguage() {
    this.currentImage = this.currentImage === this.image_select_english ? this.image_select_german : this.image_select_english;
  }
}
