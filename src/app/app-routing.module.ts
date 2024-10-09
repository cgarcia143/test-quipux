import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'Inicio'},
  {path: 'Inicio', loadChildren: () => import('src/app/module/home/home.module').then(m => m.HomeModule)},
  {path: 'Articulos', loadChildren: () => import('src/app/module/articulos/articulos.module').then(m => m.ArticulosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
