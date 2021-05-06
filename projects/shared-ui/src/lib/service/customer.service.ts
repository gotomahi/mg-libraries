import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BaseService} from './base.service';
import {DataShareService} from './data-share.service';
import {Customer} from '../model/customer';

@Injectable({providedIn: 'root'})
export class CustomerService {

  constructor(private http: HttpClient, private baseService: BaseService,
              private dataShareService: DataShareService) {
  }

  findCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseService.environment.services.customer + '/all',
      {headers: this.baseService.userHeaders()});
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseService.environment.services.customer + '/id/' + customerId,
      {headers: this.baseService.userHeaders()});
  }

  getCustomer(): Observable<Customer> {
    return this.http.get<Customer>(this.baseService.environment.services.customer,
      {headers: this.baseService.userHeaders()});
  }

  registerCustomer(customer: any): Observable<any> {
    return this.http.post(this.baseService.environment.services.customer, customer,
      {headers: this.baseService.anonymousHeaders()});
  }

  saveCustomer(customer: any): Observable<any> {
    return this.http.post(this.baseService.environment.services.customer, customer,
      {headers: this.baseService.userHeaders()});
  }
}
