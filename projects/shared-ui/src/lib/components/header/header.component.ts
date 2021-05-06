import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../model/menu';
import {DataShareService} from '../../service/data-share.service';
import {Header} from '../../model/header';
import {Observable, of} from 'rxjs';
import {MenuService} from '../../service/menu.service';

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

  constructor(private dataShareService: DataShareService, private menuService: MenuService) {
    dataShareService.isUserLoggedIn.subscribe(value => this.loggedIn = value);
  }

  ngOnInit() {
    this.dataShareService.header.next(this.header);
  }

  hasAccessible(accessRoles: string): Observable<string>{
    let hasAccess = 'false';
    if(accessRoles) {
      this.dataShareService.token.subscribe(value => {
        if (value && this.menuService.menuAccessible(accessRoles, value)) {
          hasAccess = 'true';
        }
      });
    } else {
      hasAccess = 'true';
    }
    return of(hasAccess);
  }

}
