import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos.component';
import { ArticulosRoutingModule } from './articulos-routing.module';



@NgModule({
  declarations: [
  
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }
