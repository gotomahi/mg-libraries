import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseService, DataShareService, Header, MenuService, UserService} from 'shared-ui';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  headerData: Header;

  constructor(private baseService: BaseService, private userService: UserService,
              private dataShareService: DataShareService, private menuService: MenuService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.headerData = {menu: [
        {displayName: 'Home', name: 'Home', link: '/home', accessRoles: 'role_admin', allowedOnLogin: true,
          skipLocationChange: true, menuSide: 'left'},
        {displayName: 'Myhome', name: 'Home', accessRoles: 'role_student', link: '/myhome', allowedOnLogin: true,
          skipLocationChange: true, menuSide: 'left'},
        {displayName: 'Product', name: 'Product', accessRoles: 'role_student', allowedOnLogin: true, menuSide: 'right',
          subMenu: [
            {displayName: 'Product1', link: '/product', name: 'Product1', accessRoles: 'role_student', allowedOnLogin: false, skipLocationChange: true},
            {displayName: 'Product2', link: '/product', name: 'Product2', accessRoles: 'role_student', allowedOnLogin: false, skipLocationChange: true}
          ]},
        {displayName: 'Logout', link: '/logout', name: 'logout', allowedOnLogin: true, skipLocationChange: true, menuSide: 'right'}
      ], emailContact: null, phoneContact: null, rightSideOffset: 'offset-4', home: 'Home'};

    this.dataShareService.isUserLoggedIn.subscribe(result => {
      let nextPage = 'home';
      if (result === true) {
        const token = this.dataShareService.token.getValue();
        nextPage = this.menuService.getDefaultMenu(token);
      }
      this.router.navigate([nextPage], {skipLocationChange: true});
    });
  }

}
