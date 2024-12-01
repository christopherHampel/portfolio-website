import { CommonModule} from '@angular/common';
import { Component, inject  } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

  private translateService = inject(TranslateService);

  technologies = [
    'HTML', 'CSS', 'JAVASCRIPT', 'MATERIAL DESIGN', 'TYPESCRIPT', 'ANGULAR', 'FIREBASE', 'GIT', 'REST-API', 'SCRUM', 'Growth Mindset',
  ];
}
