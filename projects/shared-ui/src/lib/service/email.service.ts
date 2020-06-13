import {BaseService} from './base.service';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class EmailService {

  constructor( private http: HttpClient, private baseService: BaseService) {}

  public sendContactInfo(body: any): Observable<HttpEvent<any>> {
    body.push('recipient', 'mr.mgondi@gmail.com');
    body.push('template', 'AD/contactus');
    body.push('termsUrl', 'http://localhost:8080/address/terms');
    body.push('privacyUrl', 'http://localhost:8080/address/privacy');
    return this.http.post<any>('http://localhost:8080/email/public/sendQuery', body, {headers: this.baseService.userHeaders()});
  }
}
