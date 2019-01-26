import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PingFormComponent } from './ping-form/ping-form.component';

@NgModule({
  declarations: [PingFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PingFormComponent
  ]
})
export class DynamicModule { }
