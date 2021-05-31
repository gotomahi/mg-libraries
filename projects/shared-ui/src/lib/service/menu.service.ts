import {DataShareService} from './data-share.service';
import {Injectable} from '@angular/core';
import {Header} from "../model/header";

@Injectable({providedIn: 'root'})
export class MenuService {
  constructor(private dataShareService: DataShareService) {

  }
  public getDefaultMenu(value): string {
    let homePage;
    const header = this.dataShareService.header.getValue();
    if(header !== null && header !== undefined){
      const headerMenu = header.menu.filter(m => m.name === header.home);
      if (headerMenu) {
        for (const menu of headerMenu) {
          const roles = menu.accessRoles.split(',');
          if (this.menuAccessible(roles, value) === true) {
            homePage = menu.link;
          }
        }
      }
    }
    return homePage;
  }

  public filterUserMenu(value): Header {
    const header = this.dataShareService.header.getValue();
    if(header !== null && header !== undefined){
      const filteredMenu = [];
        for (const menu of header.menu) {
          if (menu.accessRoles === undefined || menu.accessRoles === null
              || this.menuAccessible(menu.accessRoles.split(','), value) === true) {
            filteredMenu.push(menu);
          }
      }
        header.menu = filteredMenu;
        this.dataShareService.header.next(header);
    }
    return header;
  }

  public menuAccessible(roles, value): boolean {
    if (roles && value.access_token) {
      let token: any = atob(value.access_token.split('.', 3)[1]);
      token = JSON.parse(token);
      for (const role of roles) {
        const matchedRole = token.authorities.filter(auth => auth === role);
        if (matchedRole !== undefined && matchedRole !== null && matchedRole.toString().replace(/ /g, '') !== '') {
          return true;
        }
      }
    }
    return roles ? false : true;
  }
}
