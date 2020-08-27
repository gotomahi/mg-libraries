import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataShareService} from '../../service/data-share.service';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'lib-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private dataShareService: DataShareService) {
  }

  ngOnInit() {
    this.dataShareService.isUserLoggedIn.next(false);
    this.dataShareService.token.next(null);
    this.router.navigate(['login'], {skipLocationChange: true});
  }

}
