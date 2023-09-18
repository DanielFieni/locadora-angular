import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPageRoutingModule } from './menu-page-routing.module';
import { MenuComponent } from './menu-component/menu-component.component';
import { AppMaterialModule } from "../shared/app-material/app-material.module";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuPageRoutingModule,
    AppMaterialModule,
  ]
})
export class MenuPageModule { }
