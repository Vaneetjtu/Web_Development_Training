import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './Login/login.component';
import { Calculator } from './Calculator/cal.component';
import { Product } from './Product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Calculator,
    Product
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
