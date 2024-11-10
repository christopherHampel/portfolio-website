import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent implements OnInit {
  technolgies =[
    {
      'image': 'assets/img/html_icon.png',
      'description': 'HTML',
    },
    {
      'image': 'assets/img/css_icon.png',
      'description': 'CSS',
    },
    {
      'image': 'assets/img/javascript_icon.png',
      'description': 'JAVASCRIPT',
    },
    {
      'image': 'assets/img/material_design_icon.png',
      'description': 'MATERIAL DESIGN',
    },
    {
      'image': 'assets/img/typescript_icon.png',
      'description': 'TYPESCRIPT',
    },
    {
      'image': 'assets/img/angular_icon.png',
      'description': 'ANGULAR',
    },
    {
      'image': 'assets/img/firebase_icon.png',
      'description': 'FIREBASE',
    },
    {
      'image': 'assets/img/git_icon.png',
      'description': 'GIT',
    },
    {
      'image': 'assets/img/api_icon.png',
      'description': 'REST-API',
    },
    {
      'image': 'assets/img/scrum_icon.png',
      'description': 'SCRUM',
    },
    {
      'image': 'assets/img/growth_mindset_icon.png',
      'description': 'Growth Mindset',
    },
  ]

  ngOnInit(): void {    
  }
}
