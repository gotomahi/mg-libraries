import {Component, Input, OnInit} from '@angular/core';
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
  hide = true;
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private dataShareService: DataShareService,
              private generalService: GeneralService, private customerService: CustomerService,
              private accountService: AccountService, private formBuilder: FormBuilder) {
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
              this.dataShareService.isUserLoggedIn.next(true);
              this.dataShareService.token.next(result);
              this.customerService.getCustomer().subscribe( (customer: any) => {
                this.dataShareService.customer.next(customer);
                this.accountService.getAccount();
              });
              this.router.navigate(['home'], {skipLocationChange: true});
            } else {
              console.log('failed to authenticate the user ' + result);
            }
          },
      (error) => {
        this.loginForm.errors['submit'] = 'Failed to authenticate'; }
      );
  }

}
