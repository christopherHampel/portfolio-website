import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent{

  carouselStarted:boolean = true;

  evaluations: {name:string; review:string; reviewKey:string}[] = [
    {
      name: 'Kaloyan Ivanov',
      review: '',
      reviewKey: 'evaluations.reviewKaloyanIvanov',
    },
    {
      name: 'Manuel Mannhold',
      review: '',
      reviewKey: 'evaluations.reviewManuelMannhold',
    },
    {
      name: 'No Colleague',
      review: '',
      reviewKey: 'evaluations.reviewColleague',
    },
  ];

  private translateService = inject(TranslateService);
  private subscription = new Subscription();

  constructor() {
    this.initializeTranslations();
  }

  initializeTranslations() {
    // Erstellen eines Streams für Sprachänderungen
    const translationSubscription = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations();
    });

    // Direkt initiale Übersetzungen laden
    this.updateTranslations();

    // Subscription speichern, um sie bei Bedarf zu löschen
    this.subscription.add(translationSubscription);
  }

  /**
   * Aktualisiert die Übersetzungen basierend auf den aktuellen Sprachwerten
   */
  updateTranslations() {
    this.evaluations.forEach(evaluation => {
      if (evaluation.reviewKey) {
        // Dynamisch die Übersetzung für den Key setzen
        this.translateService
          .get(evaluation.reviewKey)
          .subscribe(translation => {
            evaluation.review = translation;
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

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