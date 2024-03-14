import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { RouteProtect } from '../shared/routeprotect';
import { Router } from '@angular/router';
import { BackendConnect } from '../shared/backendConnect';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup;
  uname: FormControl;
  pass: FormControl;
  constructor(
    private rp: RouteProtect,
    private route: Router,
    private us: BackendConnect
  ) {
    this.rp.isAllowed = false;
  }
  login(nf: NgForm) {
    this.rp.isAllowed = true;
    this.us.validateUserFromDB(nf.value);
    //this.route.navigateByUrl('userdetails');
  }
}
