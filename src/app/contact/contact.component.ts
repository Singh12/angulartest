import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
text = 'Create Form';
submitted = false;
contactForm: FormGroup;
contact = {
  name: '',
  email: '',
  text: ''
};
  constructor() { }

  ngOnInit() {
    this.createForm();
  }
createForm() {
  this.contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', [Validators.required])
  });
}

submit(): void {
this.submitted = true;
console.log(this.contactForm);
}
}
