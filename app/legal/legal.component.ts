import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [FooterComponent, NavBarComponent, PrivacyPoliceComponent, ImprintComponent ],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {

}
