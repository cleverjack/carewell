import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserOptions } from 'src/interfaces/user-options';
import { UserData } from 'src/providers/user-data';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  login: UserOptions = { username: '', password: '', permission: '' };
  submitted = false;

  constructor(public router: Router, public userData: UserData) {

  }

  onSignIn(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.login.permission = 'nurse';
      this.userData.login(this.login);
      this.router.navigateByUrl('/nurse/home');
    }
  }

}
