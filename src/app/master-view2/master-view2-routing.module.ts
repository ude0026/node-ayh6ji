import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView2Component } from './master-view2.component';
import { ChildViewComponent } from './child-view/child-view.component';

const routes: Routes = [{ path: '', component: MasterView2Component, children: [{ path: '', redirectTo: 'child-view', pathMatch: 'full' }, { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView2RoutingModule {
}
