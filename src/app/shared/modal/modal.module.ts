import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { ModalBackdropComponent } from './modal-backdrop/modal-backdrop.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  declarations: [
    ModalComponent,
    ModalBackdropComponent,
    ModalWindowComponent
  ]
})
export class ModalModule { }
