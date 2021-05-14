import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Route} from '@angular/compiler/src/core';
import {Router} from '@angular/router';

import {DataShareService} from '../../service/data-share.service';
import {UserService} from '../../service/user.service';
import {AccountService} from '../../service/account.service';
import {GeneralService} from '../../service/general.service';
import {CustomerService} from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()
  loginEvent = new EventEmitter<any>();
  hide = true;
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router,
              private dataShareService: DataShareService, private formBuilder: FormBuilder) {
        this.loginForm = formBuilder.group({
          userName: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
        });
  }

  ngOnInit() {
  }

  authenticate(): void  {
    this.userService.authenticate(this.dataShareService.token.getValue(), this.loginForm.value.userName,
      this.loginForm.value.password).subscribe( (result: any) => {
            if ( result.access_token ) {
              this.dataShareService.token.next(result);
              this.dataShareService.isUserLoggedIn.next(true);
              this.loginEvent.emit({success: true});
            } else {
              this.loginForm.setErrors({serverError: 'Token is not valid'});
            }
          },
      (error) => {
          this.loginForm.setErrors({serverError: 'Username or password is incorrect'});
        }
      );
  }

}
