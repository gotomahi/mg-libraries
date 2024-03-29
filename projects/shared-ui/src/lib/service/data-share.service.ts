import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Customer} from '../model/customer';
import {Header} from "../model/header";

@Injectable({providedIn: 'root'})
export class DataShareService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public deactivate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public token: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(null);
  public account: BehaviorSubject<Account> = new BehaviorSubject<Account>(null);
  public anonymous: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public header: BehaviorSubject<Header> = new BehaviorSubject<Header>(null);
}
