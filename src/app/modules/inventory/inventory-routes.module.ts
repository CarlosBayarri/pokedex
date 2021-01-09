import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
 
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      { path: '', component: DetailComponent}
    ]
}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InventoryRoutesModule { }
