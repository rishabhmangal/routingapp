import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegisterComponent } from './register/register.component';
import { CustomerComponent } from './userdetails/customer/customer.component';
import { EmployeeComponent } from './userdetails/employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { DomesticComponent } from './project/domestic/domestic.component';
import { OverseasComponent } from './project/overseas/overseas.component';
import { RouteProtect } from './shared/routeprotect';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'portfolio/:id/:action', component: PortfolioComponent },
  {
    path: 'userdetails',
    component: UserdetailsComponent,
    canActivate: [RouteProtect],
    children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'employee', component: EmployeeComponent },
    ],
  },
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      { path: 'domestic', component: DomesticComponent },
      { path: 'overseas', component: OverseasComponent },
    ],
  },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
