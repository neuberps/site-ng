import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProductComponent } from './pages/product/product.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';


export const routes: Routes = [

  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'product', component: ProductComponent
  },

  {
    path: 'service', component: ServiceComponent
  },

  {
    path: 'shopping-card', component: ShoppingCardComponent
  },

  {
    path: 'order', component: OrderComponent
  },

  {
    path: 'order-detail', component: OrderDetailComponent
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
