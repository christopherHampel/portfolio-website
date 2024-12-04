import { Component, AfterViewInit } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [  AboveTheFoldComponent, 
              AboutMeComponent, 
              TechnologiesComponent, 
              PortfolioComponent, 
              EvaluationComponent, 
              FooterComponent,
              ContactMeComponent,
            ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          const headerOffset = 100; // z.B. Höhe einer fixierten Navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  }

}
