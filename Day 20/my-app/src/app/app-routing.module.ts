import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path :  "", component : HomeComponent },
  { path :  "emps", component : EmpsComponent },
  { path :  "depts", component : DeptsComponent },
  { path :  "about", component : AboutusComponent },
  { path :  "detail/:id", component : DetailsComponent },
  { path :  "deptdetail/:id", component : DeptdetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
