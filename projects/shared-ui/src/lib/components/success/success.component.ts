import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = this.route.snapshot.params.message;
  }

}
