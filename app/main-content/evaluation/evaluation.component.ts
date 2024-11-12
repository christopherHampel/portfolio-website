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

  carouselStart:boolean = false;

  evaluations: {name:string; review:string, index:number}[] = [
    {
      name: 'Kaloyan Ivanov',
      review: '0000000000',
      index: 0,
    },
    {
      name: 'Manuel Mannhold',
      review: '111111111',
      index: 1,
    },
    {
      name: 'Benjamin Blümchen',
      review: '222222222',
      index: 2,
    },
  ];

  positionClasses = ['left-box', 'middle-box', 'right-box'];

  nextEvaluation() {
    this.carouselStart = true;
    // Letzte Position zur ersten verschieben und die restlichen umschichten
    this.positionClasses.unshift(this.positionClasses.pop()!);
  }

  getPositionClass(index: number) {
    // console.log(this.positionClasses);
    return this.positionClasses[index];
  }

  // nextEvaluation() {
  //   const firstItem = this.evaluations.shift();
  //   if (firstItem) {
  //     this.evaluations.push(firstItem);
  //   }
    
    // this.moveRight = true;
    // setTimeout( () => {
    //   this.moveRight = false;
    // }, 2000);
  // }

  previousEvaluation() {

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
