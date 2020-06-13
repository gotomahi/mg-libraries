import {Injectable, Inject} from '@angular/core';
import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {DataShareService} from './data-share.service';

@Injectable()
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

  private headers(token: any): any {
    return {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token.access_token};
  }

}
