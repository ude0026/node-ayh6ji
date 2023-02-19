import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView2RoutingModule } from './master-view2-routing.module';
import { MasterView2Component } from './master-view2.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    MasterView2Component,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    MasterView2RoutingModule
  ]
})
export class MasterView2Module {
}
