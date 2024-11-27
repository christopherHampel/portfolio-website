import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent{

  carouselStarted:boolean = false;

  evaluations: {name:string; review:string}[] = [

    {
      name: 'Kaloyan Ivanov',
      review: 'Christopher hat bei unserem Teamprojekt durch sein eisernes Durchhaltevermögen auch in schwierige Phasen mit klaren Kopf und ruhiger Herangehensweise das Team sehr bereichert. Mit seiner Projekterfahrung im Frontend hat er einen entscheiden Teil für den Erfolg des Projekts gestemmt.  Danke für die erfolgreiche Zusammenarbeit Chris. ',
    },
    {
      name: 'Manuel Mannhold',
      review: 'Die Zusammenarbeit mit Christopher war von Anfang an sehr angenehm. Er überzeugt durch seine Professionalität, lösungsorientiertes Denken und eine zuverlässige Arbeitsweise. Mit seiner offenen und freundlichen Art trägt er maßgeblich zu einer positiven Teamdynamik bei.',
    },
    {
      name: 'No Colleague',
      review: 'No current evaluation',
    },
  ];

  positionClasses = ['left-box', 'middle-box', 'right-box'];
  positionEllipse = ['normal-ellipse','highlight-ellipse', 'normal-ellipse']

  nextEvaluation() {
    this.carouselStarted = true;
    this.evaluations.unshift(this.evaluations.pop()!);
    this.positionEllipse.unshift(this.positionEllipse.pop()!);
  }

  getPositionClass(index: number) {
    // if(index == 0) {
    //   // return 'left-box';
    //   return {'transform': 'translateX(calc(-100% - 60px))'}
    // } else if(index == 1) {
    //   // return 'middle-box';
    //   return {'transform': 'translateX(0)'}
    // } else {
    //   return 'right-box';
    //   return {'transform': 'translateX(calc(100% + 60px))'}
    // }
    return this.positionClasses[index];
  }

  getEllipse(index: number) {
    return this.positionEllipse[index];
  }

  previousEvaluation() {
    this.positionClasses.push(this.positionClasses.shift()!);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // animation:boolean = false;

  // boxes: {name:string; review:string}[] = [
  //   {
  //     'name': '000000000000000000000000000000000000000000000000000',
  //     'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
  //   },
  //   {
  //     'name': '11111111111111111111111111111111111111111111111111111',
  //     'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
  //   },
  //   {
  //     'name': '1111122222222222222222222222222222222222222222222222222222',
  //     'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
  //   },
  //   {
  //     'name': '000000000000000000000000000000000000000000000000000',
  //     'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
  //   },
  //   {
  //     'name': '11111111111111111111111111111111111111111111111111111',
  //     'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
  //   },
  //   {
  //     'name': '1111122222222222222222222222222222222222222222222222222222',
  //     'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
  //   },  
  // ];
  
  // displayedReviews: {name:string; review:string}[] = [];
  
  // currentIndex: number = 1;

  // leftIndex: number = 0; 
  // middleIndex: number = 1;
  // rightIndex: number = 2;

  // constructor() {
  //   this.updateDisplayedBoxes();
  // }

  // updateDisplayedBoxes(): void {
  //   this.leftIndex = (this.currentIndex - 1 + this.boxes.length) % this.boxes.length;
  //   this.rightIndex = (this.currentIndex + 1) % this.boxes.length;
  //   this.displayedReviews = [
  //     this.boxes[this.leftIndex],
  //     this.boxes[this.currentIndex],
  //     this.boxes[this.rightIndex]
  //   ];
  // }

  // next(): void {
  //   this.animation = true;
  //   this.currentIndex = (this.currentIndex + 1) % this.boxes.length;
  //   this.updateDisplayedBoxes();
  //   setTimeout( () => {
  //     this.animation = false;
  //   }, 3000);
  // }

  // prev(): void {
  //   this.currentIndex = (this.currentIndex - 1 + this.boxes.length) % this.boxes.length;
  //   this.updateDisplayedBoxes();
  // }

  // translateValues(i: number): string {
  //   return 'translateX(' + (i + 100) + '%)';
  // }
}
