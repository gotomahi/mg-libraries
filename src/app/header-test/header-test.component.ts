import { Component, OnInit } from '@angular/core';
import {Header, DataShareService, MenuService} from 'shared-ui';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.css']
})
export class HeaderTestComponent implements OnInit {
  header: Header;

  constructor(private menuService: MenuService, private dataShareService: DataShareService,
              private router: Router) { }

  ngOnInit(): void {

  }


}
