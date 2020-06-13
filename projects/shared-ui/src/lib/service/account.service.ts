import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {DataShareService} from './data-share.service';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private baseService: BaseService, private dataShareService: DataShareService) {
  }

  getAccount(): void {
    this.http.get(this.baseService.environment.services.account + '?application=Address', {headers: this.baseService.userHeaders()})
      .subscribe((result: any) => {
        this.dataShareService.account.next(result);
      });
  }

  saveAccount(data: any): Observable<HttpEvent<any>> {
    const body = {
      customer: {firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password},
      account: {type: data.accountType}
    };
    return this.http.post<any>(this.baseService.environment.services.account, body, {headers: this.baseService.userHeaders()});
  }

}
