import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFeedbackComponent } from './message-feedback.component';

describe('MessageFeedbackComponent', () => {
  let component: MessageFeedbackComponent;
  let fixture: ComponentFixture<MessageFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
