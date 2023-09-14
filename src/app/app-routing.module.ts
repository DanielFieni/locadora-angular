import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  {
    path: 'menu',
    loadChildren: () => import('./menuPage/menu-page.module').then(m => m.MenuPageModule)
  },
  {
    path: 'ator',
    loadChildren: () => import('./atorPage/ator-page.module').then(m => m.AtorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
