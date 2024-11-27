import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

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
export class MainContentComponent {
  
}
