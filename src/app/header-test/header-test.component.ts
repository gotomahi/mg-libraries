import { Component, OnInit } from '@angular/core';
import {Header} from 'shared-ui';
import {MenuService} from '../../../projects/shared-ui/src/lib/service/menu.service';
import {DataShareService} from "../../../projects/shared-ui/src/lib/service/data-share.service";

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.css']
})
export class HeaderTestComponent implements OnInit {
  header: Header;

  constructor(private menuService: MenuService, private dataShareService: DataShareService) { }

  ngOnInit(): void {
    this.header = {menu: [
        {displayName: 'Home', name: 'Home', accessRoles: 'role_anonymous', link: '/home', allowedOnLogin: false,
          skipLocationChange: true, menuSide: 'left'},
        {displayName: 'Home', name: 'Home', accessRoles: 'role_student', link: '/myhome', allowedOnLogin: false,
          skipLocationChange: true, menuSide: 'left'},
        {displayName: 'Product', accessRoles: 'role_anonymous',  link: '/product', name: 'Product',
          allowedOnLogin: false, skipLocationChange: true, menuSide: 'right'}
        ], emailContact: null, phoneContact: null, rightSideOffset: 'offset-4', home: 'Home'};


    this.dataShareService.isUserLoggedIn.subscribe(result => {
      if (result === true) {
        const homePage = this.menuService.getDefaultMenu(this.dataShareService.token.getValue().access_token);
        console.log('============' + homePage);
      }
    });
  }

}
