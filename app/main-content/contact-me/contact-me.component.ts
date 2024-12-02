import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, Validators, FormBuilder, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageFeedbackComponent } from './message-feedback/message-feedback.component';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, MessageFeedbackComponent ], 
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  mailtest = true;
  formSubmitted = false;

  private translateService = inject(TranslateService);

  http = inject(HttpClient);
  privacyPolice = false;
  showFeedback = false;

  contactData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactData = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  get name() {
    return this.contactData.get('name')!;
  }

  get email() {
    return this.contactData.get('email')!;
  }

  get message() {
    return this.contactData.get('message')!;
  }

  get privacyPolicy() {
    return this.contactData.get('privacyPolicy')!;
  }

  post = {
    endPoint: 'http://christopher-hampel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        accept: 'application/json',
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    this.checkFormValid();
    if (this.contactData.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData.value))
        .subscribe({
          next: (response) => {
            this.feedbackMessageSend()
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  feedbackMessageSend() {
    this.showFeedback = true;
    setTimeout(() => {
      this.showFeedback = false;
      this.formSubmitted = false;
      this.contactData.reset();
    }, 3000);
  }

  checkFormValid() {
    this.formSubmitted = true;

    if (this.contactData.invalid) {
      this.contactData.markAllAsTouched();
      return;
    }
  }

  autoGrowTextZone(e:any) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 25)+"px";
  }
}