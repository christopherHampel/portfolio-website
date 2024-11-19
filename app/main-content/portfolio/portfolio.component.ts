import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
// import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ SingleProjectComponent ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  currentProjects = [
    {
      projectName: 'JOIN',
      projectSkills: 'ANGULAR | TYPESCRIPT | HTML | CSS | FIREBASE',
      projectImage: 'assets/img/join_image.png',
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    },
    {
      projectName: 'EL POLLO LOCO',
      projectSkills: 'HTML | CSS | JAVASCRIPT',
      projectImage: 'assets/img/elpolloloco_image.png',
      projectDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    },
    {
      projectName: 'DA BUBBLE',
      projectSkills: 'Angular | TypeScript | FIREBASE',
      projectImage: 'assets/img/dabubble_image.png',
      projectDescription: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    },
  ];
}
