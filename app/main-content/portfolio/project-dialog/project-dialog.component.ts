import { Component, Input, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {

  private translateService = inject(TranslateService);

  @Input() currentProjects: any[] = [];
  @Input() title!: string;
  @Input() skills!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() projectLink!: string;
  @Input() githubLink!: string;
  @Input() index!: number;

  closeDialog: () => void = () => {};
  
  nextProject() {
    if (this.index < this.currentProjects.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    const nextProject = this.currentProjects[this.index];
    this.updateDialog(nextProject);
  }

  private updateDialog(project: any) {
    this.title = project.projectName;
    this.skills = project.projectSkills;
    this.image = project.projectImage;
    this.description = project.projectDescription;
  }
}
