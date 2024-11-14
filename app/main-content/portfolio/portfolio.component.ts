import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SingleProjectComponent, MatDialogModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  currentProjects = [
    {
      projectName: 'JOIN',
      projectSkills: 'ANGULAR | TYPESCRIPT | HTML | CSS | FIREBASE',
      projectImage: 'assets/img/join_image.png'
    },
    {
      projectName: 'EL POLLO LOCO',
      projectSkills: 'HTML | CSS | JAVASCRIPT',
      projectImage: 'assets/img/elpolloloco_image.png'
    },
    {
      projectName: 'DA BUBBLE',
      projectSkills: 'Angular | TypeScript | FIREBASE',
      projectImage: 'assets/img/dabubble_image.png'
    },
  ];
}
