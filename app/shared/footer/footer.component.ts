import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LogoComponent } from '../logo/logo.component';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ TranslateModule, LogoComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private translateService = inject(TranslateService);

}
