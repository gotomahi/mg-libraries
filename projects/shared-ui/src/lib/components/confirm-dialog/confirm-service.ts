import {ConfirmState} from './confirm-state';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Injectable} from '@angular/core';
import {ConfirmOptions} from './confirm-options';
import {ConfirmDialogComponent} from './confirm-dialog.component';

@Injectable()
export class ConfirmService {

  constructor(private state: ConfirmState, private ngbModal: NgbModal) { }

  confirm(options: ConfirmOptions): Promise<any> {
    this.state.options = options;
    this.state.modal = this.ngbModal.open(ConfirmDialogComponent);
    return this.state.modal.result;
  }
}
