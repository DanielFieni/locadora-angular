import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtorComponent } from './atorComponent/ator-component.component';
import { AtorRoutingModule } from './ator-page-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AtorComponent
  ],
  imports: [
    CommonModule,
    AtorRoutingModule,
    MatToolbarModule
  ]
})
export class AtorPageModule { }
