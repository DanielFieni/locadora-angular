import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageRoutingModule } from './menu-page-routing.module';
import { MenuComponent } from './menu-component/menu-component.component';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule,
    MatToolbarModule
  ]
})
export class MenuPageModule { }
