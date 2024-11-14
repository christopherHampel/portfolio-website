import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ NgClass, NgStyle, MatDialogModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  constructor(private dialog: MatDialog) {}

  @Input() projectName:string = '';
  @Input() projectSkills:string = '';
  @Input() projectImage:string = '';
  @Input() isFirstElement:boolean = false;

  showProjectDialog() {
  }
}