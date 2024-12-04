import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LogoComponent } from '../logo/logo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ TranslateModule, LogoComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) {}

  private translateService = inject(TranslateService);

  navigateTo(route: string): void {
    this.router.navigate([route]); // Navigiert zu der übergebenen Route
  }

}
