import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { InitTranslationServiceService } from '../services/init-translation-service.service';
import { EvaluationInterface } from '../interfaces/evaluation-interface';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent{

  private translationService = inject(InitTranslationServiceService);

  // evaluations: {name:string; review:string; reviewKey:string}[] = [
  evaluations: EvaluationInterface[] = [
    {
      name: 'Kaloyan Ivanov',
      review: '',
      key: 'evaluations.reviewKaloyanIvanov',
    },
    {
      name: 'Manuel Mannhold',
      review: '',
      key: 'evaluations.reviewManuelMannhold',
    },
    {
      name: 'No Colleague',
      review: '',
      key: 'evaluations.reviewColleague',
    },
  ];

  constructor() {
    this.translationService.initializeTranslations([this.evaluations]);
  }

  positionEllipse = ['normal-ellipse','highlight-ellipse', 'normal-ellipse'];
  positionsBoxes = ['left-box', 'middle-box', 'right-box'];

  nextEvaluation() {
    this.positionsBoxes.unshift(this.positionsBoxes.pop()!);
    this.positionEllipse.unshift(this.positionEllipse.pop()!);
  }

  getEllipse(index: number) {
    return this.positionEllipse[index];
  }

  previousEvaluation() {
    this.positionsBoxes.push(this.positionsBoxes.shift()!);
    this.positionEllipse.push(this.positionEllipse.shift()!);
  }

  getPosition(index:number) {
    return this.positionsBoxes[index];
  }

  // initializeTranslations() {
  //   const translationSubscription = this.translateService.onLangChange.subscribe(() => {
  //     this.updateTranslations();
  //   });
  //   this.updateTranslations();
  //   this.subscription.add(translationSubscription);
  // }

  // updateTranslations() {
  //   this.evaluations.forEach(evaluation => {
  //     if (evaluation.reviewKey) {
  //       this.translateService
  //         .get(evaluation.reviewKey)
  //         .subscribe(translation => {
  //           evaluation.review = translation;
  //         });
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}