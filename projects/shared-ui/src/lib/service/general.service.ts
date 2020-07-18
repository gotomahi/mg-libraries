import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {BaseService} from './base.service';
import {DataShareService} from './data-share.service';

@Injectable()
export class GeneralService {

  constructor(private http: HttpClient, private baseService: BaseService, private dataShareService: DataShareService) { }

  public getFileContent(relativeFilePath: string, responseContentType: string): Observable<any> {
    return this.http.get(relativeFilePath);
  }

}
