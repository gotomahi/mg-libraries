import {Injectable, TemplateRef} from '@angular/core';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmOptions} from './confirm-options';

@Injectable()
export class ConfirmState {
  options: ConfirmOptions;
  modal: NgbModalRef;
  template: TemplateRef<any>;
}
