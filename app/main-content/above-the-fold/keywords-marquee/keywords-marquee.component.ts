import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-keywords-marquee',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './keywords-marquee.component.html',
  styleUrl: './keywords-marquee.component.scss'
})
export class KeywordsMarqueeComponent {

  private translateService = inject(TranslateService);

}
