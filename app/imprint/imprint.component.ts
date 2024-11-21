import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
