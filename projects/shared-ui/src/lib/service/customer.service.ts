import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BaseService} from './base.service';
import {DataShareService} from './data-share.service';
import {Customer} from '../model/customer';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient, private baseService: BaseService, private dataShareService: DataShareService) {
  }

  findCustomers(firstName: string, lastName: string): Customer[] {
    const customers: Customer[] = [];
    this.http.post(this.baseService.environment.services.users, {}, {headers: this.baseService.userHeaders()}).subscribe(result => {
      Object.assign(customers, result);
    });
    return customers;
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseService.environment.services.user + customerId);
  }

  getCustomer(): Observable<Customer> {
    return this.http.get<Customer>(this.baseService.environment.services.user, {headers: this.baseService.userHeaders()});
  }

  saveCustomer(customer: any): Observable<any> {
    return this.http.post(this.baseService.environment.services.user, customer,  {headers: this.baseService.anonymousHeaders()});
  }
}
