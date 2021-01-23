import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { MaterialModule } from 'src/app/material.module';
import { ComponentsModule } from '../inventory/components/components.module';
import { RegionsRoutesModule } from './regions-routes.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RegionsRoutesModule,
    FlexLayoutModule
  ]
})
export class RegionsModule { }
