import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { MycartComponent } from './mycart/mycart.component'
import { ProductdetailsComponent } from './productdetails/productdetails.component'
import { MyorderComponent } from './myorder/myorder.component'
import { LivingComponent } from './living/living.component'
import { KitchenComponent } from './kitchen/kitchen.component'
import { ArtComponent } from './art/art.component'

const routes: Routes = [
  { path: ' ', redirectTo: '/main', pathMatch: 'full' },
  { path:'main',component:HomepageComponent },
  {path:'productdetail/:id',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'mycart',component:MycartComponent},
  {path:'myorder',component:MyorderComponent},
  {path:'living',component:LivingComponent},
  {path:'kitchen',component:KitchenComponent},
  {path:'art',component:ArtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
