import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  {path: 'messages', loadChildren: './messages/messages.module#MessagesModule'},
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
