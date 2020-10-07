import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../service/email.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {Contactus} from "../../model/contactus";

@Component({
  selector: 'lib-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactusForm: FormGroup;

  constructor(private emailService: EmailService, private fb: FormBuilder) {
    this.contactusForm = fb.group({
       name: new FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required, Validators.email]),
       queryType: new FormControl('', [Validators.required]),
       query: new FormControl('', [Validators.required])
    }); }

  ngOnInit() {
  }

  sendEmail(): void {
    let contactus = new Contactus();
    Object.assign(contactus, this.contactusForm.getRawValue());
    this.emailService.sendContactInfo(contactus).subscribe( result => {});
  }

}
