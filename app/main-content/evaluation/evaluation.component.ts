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

  carouselStarted:boolean = true;

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

  positionEllipse = ['normal-ellipse','highlight-ellipse', 'normal-ellipse'];
  positionsBoxes = ['left-box', 'middle-box', 'right-box'];

  nextEvaluation() {
    this.carouselStarted = true;
    this.positionsBoxes.unshift(this.positionsBoxes.pop()!);
  }

  getEllipse(index: number) {
    return this.positionEllipse[index];
  }

  previousEvaluation() {
    this.carouselStarted = true;
    this.evaluations.push(this.evaluations.shift()!);
    
    this.positionEllipse.push(this.positionEllipse.shift()!);

    // console.log(this.evaluations);
  }

  getPosition(index:number) {
    return this.positionsBoxes[index];


  //   if(index == 0) {
  //     return 'left-box';
  //     // return {'transform': 'translateX(calc(100% + 80px))'};
  //   } else if(index == 1) {
  //     // return {'transform': 'translateX(calc(100% + 80px))'};
  //     return 'middle-box';
  //   } else {
  //     // return {'transform': 'translateX(calc(-200% - 160px))'};
  //     return 'right-box';
  //   }
  // }
  }
}