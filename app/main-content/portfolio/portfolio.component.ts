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
      projectSkills: ['JAVASCRIPT', 'HTML', 'CSS', 'FIREBASE'],
      projectImage: 'assets/img/join_christopher_hampel.png',
      projectDescription: '',
      projectLink: "http://join.christopher-hampel.de/",
      githubLink: "https://github.com/christopherHampel/join",
      key: 'portfolio.join',
    },
    {
      projectName: 'EL POLLO LOCO',
      projectSkills: ['HTML', 'CSS', 'JAVASCRIPT'],
      projectImage: 'assets/img/epl_image.png',
      projectDescription: '',
      projectLink: "http://polloloco.christopher-hampel.de/",
      githubLink: "https://github.com/christopherHampel/el-pollo-loco",
      key: 'portfolio.epl',
    },
    {
      projectName: 'DA BUBBLE',
      projectSkills: ['ANGULAR', 'TYPESCRIPT', 'FIREBASE'],
      projectImage: 'assets/img/dabubble_image.png',
      projectDescription: '',
      projectLink: "#",
      githubLink: "#",
      key: 'portfolio.dabubble',
    },
  ];

  constructor() {
    this.initializeTranslations();
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
