import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule, MainRoutedComponents } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  // Components without routes go in here.
  declarations: [
    MainRoutedComponents,
  ]
})
export class MainModule { }
