import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';

// Created Components


// Created Directives


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FilterPipe
  ],
  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
