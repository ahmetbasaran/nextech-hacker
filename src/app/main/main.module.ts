import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule, MainRoutedComponents } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule
  ],
  // Components without routes go in here.
  declarations: [
    MainRoutedComponents,
  ],
})
export class MainModule { }
