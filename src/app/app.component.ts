import {Component, OnInit} from '@angular/core';
import {BaseService, Header} from 'shared-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  header: Header;

  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {
    this.header = {menu: [{displayName: 'Home', name:'Home', link: '/home', allowedOnLogin: false, skipLocationChange: true, menuSide: 'left'},
        {displayName: 'Product', link: '/product', name: 'Product', allowedOnLogin: false, skipLocationChange: true, menuSide: 'right'}], emailContact: null, phoneContact: null, rightSideOffset: 'offset-4'};
  }

}
