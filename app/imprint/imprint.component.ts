import { Component } from '@angular/core';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ NavBarComponent, FooterComponent ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
