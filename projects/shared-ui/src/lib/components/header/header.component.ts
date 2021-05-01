import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../model/menu';
import {DataShareService} from '../../service/data-share.service';
import {Header} from '../../model/header';
import {Observable, of} from "rxjs";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  header: Header;
  loggedIn: boolean;
  mobileMode: string;

  constructor(private dataShareService: DataShareService) {
    dataShareService.isUserLoggedIn.subscribe(value => this.loggedIn = value);
  }

  ngOnInit() {
    this.dataShareService.header.next(this.header);
  }

  hasAccessible(accessRoles: string): Observable<string>{
    let hasAccess = 'false';
    if(accessRoles) {
      this.dataShareService.token.subscribe(value => {
        if(value) {
          let token: any = atob(value.access_token.split('.')[1]);
          token = JSON.parse(token);
          if (token) {
            const roles = accessRoles.split(',');
            for (const role of roles) {
              const matchedRole = token.authorities.filter(auth => auth === role);
              if (matchedRole !== undefined && matchedRole !== null && matchedRole.toString().replace(/ /g, '') !== '') {
                hasAccess = 'true';
                break;
              }
            }
          }
        }
      });
    } else {
      hasAccess = 'true';
    }
    return of(hasAccess);
  }

}
