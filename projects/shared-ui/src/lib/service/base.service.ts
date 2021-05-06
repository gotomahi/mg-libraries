import {Injectable, Inject} from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {DataShareService} from './data-share.service';

@Injectable({providedIn: 'root'})
export class BaseService {
  public environment: any;

  constructor(private dataShareService: DataShareService, @Inject('environment') envConfig) {
    this.environment = envConfig;
  }

  public handleError(error: HttpErrorResponse) {
    const errMsg = error.message ? error.message : 'Server error';
    return Observable.throw(errMsg);
  }

  public userHeaders(): any {
    return this.headers(this.dataShareService.token.getValue());
  }

  public anonymousHeaders(): any {
    return this.headers(this.dataShareService.anonymous.getValue());
  }

  public getHeaders(): any {
    if (this.dataShareService.token && this.dataShareService.token.getValue()) {
      return this.headers(this.dataShareService.token.getValue());
    } else {
      return this.headers(this.dataShareService.anonymous.getValue());
    }
  }

  private headers(token: any): any {
    return {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access_token};
  }
  public xs(): boolean {return  window.innerWidth < 576; }
  public sm(): boolean {return window.innerWidth >= 576 && window.innerWidth < 768; }
  public md(): boolean {return window.innerWidth >= 768 && window.innerWidth < 992; }
  public lg(): boolean {return window.innerWidth >= 992 && window.innerWidth < 1200; }
  public xl(): boolean {return window.innerWidth >= 1200; }

}
