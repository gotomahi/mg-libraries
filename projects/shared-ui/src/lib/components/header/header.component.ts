import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../model/menu';
import {DataShareService} from '../../service/data-share.service';
import {Header} from '../../model/header';
import has = Reflect.has;

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
  }

  hasAccessible(accessRoles: string): boolean{
    let hasAccess = false;
    if(accessRoles) {
      const token = this.dataShareService.token.getValue();
      if (token) {
        const roles = accessRoles.split(',');
        for (const role of roles) {
          if (token.authorities.contains(role)) {
            hasAccess = true;
            break;
          }
        }
      }
    } else {
      hasAccess = true;
    }
    return hasAccess;
  }

}
