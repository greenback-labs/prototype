import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  host: {
    'class': 'modal fade',
    'role': 'dialog',
    'tabindex': '-1'
  },
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
