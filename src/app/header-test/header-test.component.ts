import { Component, OnInit } from '@angular/core';
import {Header} from 'shared-ui';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.css']
})
export class HeaderTestComponent implements OnInit {
  header: Header;

  constructor() { }

  ngOnInit(): void {
    this.header = {menu: [
      {displayName: 'Home', name:'Home', link: '/home', allowedOnLogin: false, skipLocationChange: true, menuSide: 'left'},
      {displayName: 'Product', accessRoles: 'role_anonymous',  link: '/product', name: 'Product', allowedOnLogin: false, skipLocationChange: true, menuSide: 'right'}
        ], emailContact: null, phoneContact: null, rightSideOffset: 'offset-4'};
  }

}
