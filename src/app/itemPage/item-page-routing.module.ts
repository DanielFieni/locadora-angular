import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from "./guards/item.resolver";
import { ItemFormComponent } from "./containers/itemForm/item-form.component";
import { ItemComponent } from "./containers/itemComponent/item-component.component";

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'novo', component: ItemFormComponent, resolve: { item: ItemResolver }  },
  { path: 'editar/:id', component: ItemFormComponent, resolve: { item: ItemResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
