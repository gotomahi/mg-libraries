import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmState} from './confirm-state';
import {ConfirmOptions} from './confirm-options';

@Component({
  selector: 'lib-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  options: ConfirmOptions;

  constructor(private state: ConfirmState) {
    this.options = state.options;
  }

  confirm() {
    this.state.modal.close('Confirm');
  }

  cancel() {
    this.state.modal.dismiss('Cancel');
  }
}
