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
}