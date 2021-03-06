import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { InventoryRoutesModule } from './inventory-routes.module';
import { MaterialModule } from 'src/app/material.module';
import { ComponentsModule } from './components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    InventoryRoutesModule,
    FlexLayoutModule
    
  ]
})
export class InventoryModule { }
