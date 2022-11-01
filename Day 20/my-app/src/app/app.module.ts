import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { EmpsComponent } from './emps/emps.component';
import { DetailsComponent } from './details/details.component';
import { DeptsComponent } from './depts/depts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptdetailsComponent } from './deptdetails/deptdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    EmpsComponent,
    DetailsComponent,
    DeptsComponent,
    AboutusComponent,
    DeptdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
