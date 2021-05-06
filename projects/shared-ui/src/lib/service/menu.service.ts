import {DataShareService} from './data-share.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MenuService {
  constructor(private dataShareService: DataShareService) {

  }
  public getDefaultMenu(value): string {
    let homePage;
    this.dataShareService.header.subscribe(h => {
      const header = JSON.parse(h);
      const headerMenu = header.filter(m => m.name === header.home);
      if (headerMenu) {
        for (const menu of headerMenu) {
          const roles = menu.accessRoles.split(',');
          if (this.menuAccessible(roles, value)) {
            homePage = menu.link;
          }
        }
      }
    });
    return homePage;
  }

  public menuAccessible(roles, value): boolean {
    let accessible = false;
    if (roles) {
      let token: any = atob(value.access_token.split('.')[1]);
      token = JSON.parse(token);
      for (const role of roles) {
        const matchedRole = token.authorities.filter(auth => auth === role);
        if (matchedRole !== undefined && matchedRole !== null && matchedRole.toString().replace(/ /g, '') !== '') {
          accessible = true;
        }
      }
    } else {
      accessible = true;
    }
    return accessible;
  }
}
