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

  constructor(public dataShareService: DataShareService, private menuService: MenuService) {
  }

  ngOnInit() {
    this.dataShareService.header.next(this.header);
    this.dataShareService.isUserLoggedIn.subscribe(value => {
      this.loggedIn = value;
      if(value === true) {
        this.header = this.menuService.filterUserMenu(this.dataShareService.token.getValue());
        console.log(this.header);
      }
    });
  }

  hasAccessible(accessRoles: string): Observable<boolean>{
    const token = this.dataShareService.token.getValue();
    let accessible = accessRoles ? false : true;
    if(token && accessRoles) {
      accessible = this.menuService.menuAccessible(accessRoles.split(','), token);
      console.log(accessRoles + ' is accessible ' + accessible);
    }
    return of(accessible);
  }

}
