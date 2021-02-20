import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { CoverRoutesModule } from './cover-routes.module';
import { CoverComponent } from './cover.component';



@NgModule({
  declarations: [CoverComponent],
  imports: [
    CommonModule,
    CoverRoutesModule,
    MaterialModule
  ]
})
export class CoverModule { }
