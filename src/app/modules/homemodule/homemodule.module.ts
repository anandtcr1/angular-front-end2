import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomemoduleRoutingModule
  ]
})
export class HomemoduleModule { }
