import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendConnect } from '../shared/backendConnect';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  users: any[] = [];

  ngOnInit(): void {
    //this.us.loadUserFromDB()
  }
  constructor(private us: BackendConnect) {
    this.createFormControls();
    this.createForm();
  }
  myForm: FormGroup;
  uname: FormControl;
  pass: FormControl;
  email: FormControl;
  city: FormControl;

  createFormControls() {
    this.uname = new FormControl('', Validators.required);
    this.pass = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      this.emailDomainValidator,
    ]);
    this.city = new FormControl('');
  }
  createForm() {
    this.myForm = new FormGroup({
      uname: this.uname,
      pass: this.pass,
      email: this.email,
      city: this.city,
    });
  }
  emailDomainValidator(control: FormControl) {
    let email = control.value;
    if (email && email.indexOf('@') != -1) {
      let [_, domain] = email.split('@');
      if (domain !== 'mmc.com') {
        return {
          emailDomain: {
            myDomain: domain,
          },
        };
      }
    }
    return null;
  }
  addUser() {
    //console.log(this.myForm.value)
    this.us.addUserToDB(this.myForm.value);
  }
  getUser() {
    this.users = [];
    this.us.getUserFromDB().subscribe((res) => {
      if (res) {
        for (let key in res) {
          this.users.push(res[key]);
        }
      }
    });
  }
}
