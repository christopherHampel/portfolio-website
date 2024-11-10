import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { KeywordsMarqueeComponent } from './keywords-marquee/keywords-marquee.component';


@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TitleComponent, KeywordsMarqueeComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

}
