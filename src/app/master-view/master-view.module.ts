import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { HomeComponent } from './home/home.component';
import { IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxIconModule, IgxListModule, IgxToggleModule, IgxDropDownModule, IgxButtonGroupModule, IgxBadgeModule, IgxAvatarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    HomeComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCardModule,
    IgxIconModule,
    FormsModule,
    IgxListModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxButtonGroupModule,
    IgxBadgeModule,
    IgxAvatarModule
  ]
})
export class MasterViewModule {
}
