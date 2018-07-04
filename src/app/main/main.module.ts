import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule, MainRoutedComponents } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FilterPipeModule,
    FormsModule
  ],
  // Components without routes go in here.
  declarations: [
    MainRoutedComponents,
  ],
})
export class MainModule { }
