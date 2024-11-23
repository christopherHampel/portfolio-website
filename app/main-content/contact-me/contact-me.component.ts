import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, Form, Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ FormsModule, NgClass, NgStyle, CommonModule, ReactiveFormsModule], 
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  http = inject(HttpClient);
  privacyPolice = false;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]
    });
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  get privacyPolicy() {
    return this.contactForm.get('privacyPolicy')!;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
    }
  }
}

















//   mailTest = true;

//   post = {
//     endPoint: 'https://deineDomain.de/sendMail.php',
//     body: (payload: any) => JSON.stringify(payload),
//     options: {
//       headers: {
//         'Content-Type': 'text/plain',
//         responseType: 'text',
//       },
//     },
//   };

//   onSubmit(ngForm: NgForm) {
//     if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//       this.http.post(this.post.endPoint, this.post.body(this.contactData))
//         .subscribe({
//           next: (response) => {

//             ngForm.resetForm();
//           },
//           error: (error) => {
//             console.error(error);
//           },
//           complete: () => console.info('send post complete'),
//         });
//     } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

//       ngForm.resetForm();
//     }
//   }
// }
