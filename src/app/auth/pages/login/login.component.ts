import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  authForm = this._fb.group({
    user: ['', [Validators.required] ],
    password: ['', [Validators.required] ],
  });

  constructor(private _fb: FormBuilder, private _router: Router) {}

  onSubmit() {
    this._router.navigateByUrl('/begin/schools');
  }

}
