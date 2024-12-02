import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-message-feedback',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './message-feedback.component.html',
  styleUrl: './message-feedback.component.scss'
})
export class MessageFeedbackComponent {
  @Input() showFeedback = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showFeedback'] && changes['showFeedback'].currentValue) {
      console.log('Feedback sichtbar');
    }
  }
}
