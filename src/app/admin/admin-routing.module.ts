import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
