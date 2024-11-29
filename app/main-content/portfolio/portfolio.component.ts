import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ SingleProjectComponent, TranslateModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  private translateService = inject(TranslateService);
  private subscription = new Subscription();

  currentProjects = [
    {
      projectName: 'JOIN',
      projectSkills: 'ANGULAR | TYPESCRIPT | HTML | CSS | FIREBASE',
      projectImage: 'assets/img/join_image.png',
      projectDescription: '',
      key: 'portfolio.join',
    },
    {
      projectName: 'EL POLLO LOCO',
      projectSkills: 'HTML | CSS | JAVASCRIPT',
      projectImage: 'assets/img/elpolloloco_image.png',
      projectDescription: '',
      key: 'portfolio.epl',
    },
    {
      projectName: 'DA BUBBLE',
      projectSkills: 'Angular | TypeScript | FIREBASE',
      projectImage: 'assets/img/dabubble_image.png',
      projectDescription: '',
      key: 'portfolio.dabubble',
    },
  ];

  constructor() {
    this.initializeTranslations();
    console.log(this.currentProjects);
  }

  initializeTranslations() {
    const translationSubscription = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });
    this.updateTranslations();
    this.subscription.add(translationSubscription);
  }

  updateTranslations() {
    this.currentProjects.forEach(project => {
      if (project.key) {
        this.translateService
          .get(project.key)
          .subscribe(translation => {
            project.projectDescription = translation;
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
