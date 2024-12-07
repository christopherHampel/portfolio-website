import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [FooterComponent, NavBarComponent, TranslateModule ],
  templateUrl: './privacy-police.component.html',
  styleUrl: './privacy-police.component.scss'
})
export class PrivacyPoliceComponent {

  private translateService = inject(TranslateService);
  
}
