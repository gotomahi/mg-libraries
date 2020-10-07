import {BaseService} from './base.service';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class EmailService {

  constructor( private http: HttpClient, private baseService: BaseService) {}

  public sendContactInfo(contactus: any): Observable<HttpEvent<any>> {
    contactus.recipient = this.baseService.environment.recipient;
    contactus.template = this.baseService.environment.contactusTemplate;
    contactus.termsUrl = this.baseService.environment.services.terms;
    contactus.privacyUrl = this.baseService.environment.services.privacy;
    contactus.application = this.baseService.environment.application;
    return this.http.post<any>(this.baseService.environment.services.contactus, contactus, {headers: this.baseService.getHeaders()});
  }
}
