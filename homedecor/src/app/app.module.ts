import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { CartServices } from './cart2.service';
import { NeworderServices } from './neworder.service';
import { FormsModule } from '@angular/forms';
import { LivingComponent } from './living/living.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ArtComponent } from './art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MycartComponent,
    MyorderComponent,
    ProductdetailsComponent,
    LivingComponent,
    KitchenComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartServices, NeworderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
