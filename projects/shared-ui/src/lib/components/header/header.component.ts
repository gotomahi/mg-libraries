import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../model/menu';
import {DataShareService} from '../../service/data-share.service';
import {Header} from '../../model/header';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  header: Header;
  loggedIn: boolean;

  constructor(private dataShareService: DataShareService) {
    dataShareService.isUserLoggedIn.subscribe(value => this.loggedIn = value);
  }

  ngOnInit() {
  }

}
