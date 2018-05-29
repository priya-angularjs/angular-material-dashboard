import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";

const routes: Routes = [
  {path: '', component: NavBarComponent,
  children: [{ path: '', component: DashboardComponent }]}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
