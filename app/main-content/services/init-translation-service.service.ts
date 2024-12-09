import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InitTranslationServiceService {

  private subscription = new Subscription();
  private translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  initializeTranslations<T extends { key: string }>(arrays: T[][]): void {
    const translationSubscription = this.translateService.onLangChange.subscribe(() => {
      this.updateTranslations(arrays);
    });
    this.updateTranslations(arrays);
    this.subscription.add(translationSubscription);
  }

  updateTranslations<T extends { key: string }>(arrays: T[][]): void {
    arrays.forEach(array => {
      array.forEach(item => {
        if (item.key) {
          this.translateService
            .get(item.key)
            .subscribe(translation => {
              if ('projectDescription' in item) {
                (item as any).projectDescription = translation;
              } else if ('review' in item) {
                (item as any).review = translation;
              }
            });
        }
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}