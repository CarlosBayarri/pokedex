import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { RandomButtonComponent } from './random-button/random-button.component';
import { RegionCardComponent } from './region-card/region-card.component';



@NgModule({
  declarations: [PokemonCardComponent, RandomButtonComponent, RegionCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [PokemonCardComponent, RandomButtonComponent, RegionCardComponent],
})
export class ComponentsModule { }
