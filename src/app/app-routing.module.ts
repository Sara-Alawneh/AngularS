import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UfmRoutes} from "./ufm/ufm.routes";


const routes:Routes = [
  ...UfmRoutes,
  {
    path: '**',
    redirectTo: 'ufm'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
