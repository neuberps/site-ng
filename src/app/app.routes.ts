import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ShippingCarComponent } from './pages/shipping-car/shipping-car.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ServiceComponent } from './pages/service/service.component';
import { DetailsComponent } from './pages/details/details.component';



export const routes: Routes = [


  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'product', component: ProductComponent
  },

  {
    path: 'checkout', component: CheckoutComponent
  },

  {
    path: 'details', component: DetailsComponent
  },


  { path: 'details/:id', component: DetailsComponent

  },


  {
    path: 'service', component: ServiceComponent
  },

  {
    path: 'shipping-card', component: ShippingCarComponent
  },

  //routes secondaries
  //  { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

   //standalone
  //  { path: 'add-user', loadComponent: ()=> import('./..... add-user.component').then(c => c.AddUserComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
