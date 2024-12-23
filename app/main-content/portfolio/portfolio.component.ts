import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InitTranslationServiceService } from '../services/init-translation-service.service';
import { ProjectInterface } from '../interfaces/project-interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ SingleProjectComponent, TranslateModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  private translationService = inject(InitTranslationServiceService);

  currentProjects: ProjectInterface[] = [
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
    }
  ];

  constructor() {
    this.translationService.initializeTranslations([this.currentProjects]);
  }
}
