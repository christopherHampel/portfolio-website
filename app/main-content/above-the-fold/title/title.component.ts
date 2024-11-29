import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ TranslateModule ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {

  private translateService = inject(TranslateService);

}
