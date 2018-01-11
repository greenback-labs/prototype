import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-backdrop',
  host: {
    'class': 'modal-backdrop fade'
  },
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss']
})
export class ModalBackdropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
