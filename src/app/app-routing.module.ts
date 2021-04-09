import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('src/app/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('src/app/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'messages', loadChildren: () => import('src/app/messages/messages.module').then(m => m.MessagesModule) },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
