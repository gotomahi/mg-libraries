import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseService, DataShareService, Header, UserService} from 'shared-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  doc: any;

  constructor(private baseService: BaseService, private userService: UserService,
              private dataShareService: DataShareService) {
    this.dataShareService.isUserLoggedIn.subscribe(result => {
      console.log('===========' + result);
    });
  }

  ngOnInit(): void {
    this.userService.authenticate(null, 'anonymous', 'password').subscribe(
      result => {
        this.dataShareService.isUserLoggedIn.next(true);
        this.dataShareService.token.next(result);
      }
    );
  }

}
