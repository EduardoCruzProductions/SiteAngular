import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component'
import { CalculadoraComponent } from './calculadora/calculadora.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'calculadora', component:CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
