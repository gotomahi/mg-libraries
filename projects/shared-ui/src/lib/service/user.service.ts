import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/internal/Observable';
import { DataShareService } from './data-share.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private baseService: BaseService, private dataShareService: DataShareService) {
  }

  authenticate(token: string, username: string, password: string): Observable<string> {
    const authorization = token ? 'Bearer ' + token : 'Basic ' + btoa('address:password');
    return this.http.post<string>(this.baseService.environment.services.login + '?grant_type=password&username=' + username + '&password=' + password,
      null, {headers: {'Content-Type': 'application/json', 'authorization': authorization}});
  }

  anonymousLogin(): Observable<any> {
    return this.http.post<any>(this.baseService.environment.services.login + '?grant_type=password&username=anonymous&password=password',
      null, {headers: {'Content-Type': 'application/json', 'authorization': this.getAnonymouseBasicAuth()}});
  }

  isTokenValid(authentication: any): boolean {
    let valid = false;
    let remaingTime: number = new Date(authentication.exp).getTime() - new Date().getTime();
    valid = (remaingTime >= 10);
    return valid;
  }

  refreshAccessToken(token: string): Observable<any> {
    let authToken = this.dataShareService.token.getValue();
    let tokenPayload:any = atob(token.substring(8).split(".")[1]);
    if('anonymous' === tokenPayload.user_name){
      authToken = this.dataShareService.anonymous.getValue();
    }
    return this.http.post<string>(this.baseService.environment.services.login + '?grant_type=refresh_token&refresh_token=' + this.dataShareService.token.getValue().refresh_token,
    null, {headers: {'Content-Type': 'application/json', 'authorization': authToken}});
  }

  getAccessToken(oldAccessToken: string): string {
    let accessToken = null;
    if(this.dataShareService.token.getValue()){
      accessToken = this.dataShareService.token.getValue();
    }
    return accessToken;
  }

  getUserBasicAuth(): any {
    return 'Basic' + btoa('address:password');
  }

  getAnonymouseBasicAuth(): any {
    return 'Basic ' + btoa('anonymous:password');
  }
}
