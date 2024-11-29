import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, TranslateModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  currentLanguage:string = 'de';

  languages = ["en", "de"];
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  public changeLang(): string {
    return 'Funktion in AppComponent wurde aufgerufen!';
  }

  changeLanguage(language:string) {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translateService.use(this.currentLanguage);
    // localStorage.setItem('language', this.currentLanguage);
  }
}
