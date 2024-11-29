import { Component } from '@angular/core';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-privacy-police',
  standalone: true,
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './privacy-police.component.html',
  styleUrl: './privacy-police.component.scss'
})
export class PrivacyPoliceComponent {

}
