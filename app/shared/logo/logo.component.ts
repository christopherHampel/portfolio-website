import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [ ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(private router: Router) { }

  navigateToSection(fragment: string): void {
    this.router.navigate(['/'], { fragment }).then(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

}
