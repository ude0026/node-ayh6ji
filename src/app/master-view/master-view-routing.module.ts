import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'home', pathMatch: 'full' }, { path: 'home', component: HomeComponent, data: { text: 'Home' } }, { path: 'all-products', component: AllProductsComponent, data: { text: 'All Products' } }, { path: 'product-details', component: ProductDetailsComponent, data: { text: 'Product Details' } }, { path: 'shopping-cart', component: ShoppingCartComponent, data: { text: 'Shopping Cart' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
