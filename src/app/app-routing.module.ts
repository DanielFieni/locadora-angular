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
  },
  {
    path: 'classe',
    loadChildren: () => import('./classePage/classe-page.module').then(m => m.ClassePageModule)
  },
  {
    path: 'diretor',
    loadChildren: () => import('./diretorPage/diretor-page.module').then(m => m.DiretorPageModule)
  },
  {
    path: 'titulo',
    loadChildren: () => import('./tituloPage/titulo-page.module').then(m => m.TituloPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
