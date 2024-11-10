import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReviewBoxComponent } from "./review-box/review-box.component";

@Component({
  selector: 'app-colleagues-reviews',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './colleagues-reviews.component.html',
  styleUrl: './colleagues-reviews.component.scss'
})
export class ColleaguesReviewsComponent{

  boxes: {name:string; review:string}[] = [
    {
      'name': '000000000000000000000000000000000000000000000000000',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
    },
    {
      'name': '11111111111111111111111111111111111111111111111111111',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
    },
    {
      'name': '22222222222222222222222222222222222222222222222222222',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
    },
    {
      'name': '000000000000000000000000000000000000000000000000000',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
    },
    {
      'name': '11111111111111111111111111111111111111111111111111111',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
    },
    {
      'name': '22222222222222222222222222222222222222222222222222222',
      'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione itaque possimus provident. Adipisci voluptatibus aut nobis voluptate cumque architecto explicabo magnam nemo quas odit mollitia quo, molestias asperiores laborum?',
    },  
  ];
  
  displayedBoxes: {name:string; review:string}[] = [];
  
  currentIndex: number = 1;

  leftIndex: number = 0; 
  middleIndex: number = 1;
  rightIndex: number = 2;

  constructor() {
    this.updateDisplayedBoxes();
  }

  updateDisplayedBoxes(): void {
    this.leftIndex = (this.currentIndex - 1 + this.boxes.length) % this.boxes.length;
    this.rightIndex = (this.currentIndex + 1) % this.boxes.length;
    this.displayedBoxes = [
      this.boxes[this.leftIndex],
      this.boxes[this.currentIndex],
      this.boxes[this.rightIndex]
    ];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.boxes.length;
    this.updateDisplayedBoxes();
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.boxes.length) % this.boxes.length;
    this.updateDisplayedBoxes();
  }

  isRedBox(i: number): boolean {
    return i === 0 || i === 2;
  }
}
