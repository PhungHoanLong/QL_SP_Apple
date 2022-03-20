import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'Checkout', component:CheckoutComponent},
  {path: 'Product', component:ProductComponent},
  {path: 'Store', component:StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
