import { Component, Input, ComponentRef, ViewContainerRef } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ NgClass ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {

  constructor(private viewContainerRef: ViewContainerRef) {}

  @Input() currentProjects!: any[];
  @Input() projectName:string = '';
  @Input() projectSkills:string = '';
  @Input() projectImage:string = '';
  @Input() projectDescription:string = '';
  @Input() isFirstElement:boolean = false;
  @Input() index!:number;


  showProjectDialog() {
  
    const componentRef: ComponentRef<ProjectDialogComponent> = this.viewContainerRef.createComponent(ProjectDialogComponent);
  
    componentRef.instance.currentProjects = this.currentProjects;
    componentRef.instance.title = this.currentProjects[this.index].projectName;
    componentRef.instance.skills = this.currentProjects[this.index].projectSkills;
    componentRef.instance.image = this.currentProjects[this.index].projectImage;
    componentRef.instance.description = this.currentProjects[this.index].projectDescription;
    componentRef.instance.index = this.index;
  
    componentRef.instance.closeDialog = () => {
      componentRef.destroy();
    };
  }

  // showProjectDialog(index:number) {

  //   console.log(index);

  //   const componentRef: ComponentRef<ProjectDialogComponent> = this.viewContainerRef.createComponent(ProjectDialogComponent);

  //   componentRef.instance.title = this.projectName;
  //   componentRef.instance.skills = this.projectSkills;
  //   componentRef.instance.image = this.projectImage;
  //   componentRef.instance.description = this.projectDescription;
  //   componentRef.instance.index = index;

  //   componentRef.instance.closeDialog = () => {
  //     componentRef.destroy();
  //   };
  // }
}