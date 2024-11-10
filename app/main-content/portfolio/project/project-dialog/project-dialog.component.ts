import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { projectName: string; projectSkills: string; projectImage: string }) {}

}
