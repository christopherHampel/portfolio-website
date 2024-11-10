import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ NgClass, NgStyle, MatDialogModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  constructor(private dialog: MatDialog) {}

  @Input() projectName:string = '';
  @Input() projectSkills:string = '';
  @Input() projectImage:string = '';
  @Input() isFirstElement:boolean = false;

  showProjectDialog() {
  }
}