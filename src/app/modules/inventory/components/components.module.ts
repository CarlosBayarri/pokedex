import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { RandomButtonComponent } from './random-button/random-button.component';



@NgModule({
  declarations: [PokemonCardComponent, RandomButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [PokemonCardComponent, RandomButtonComponent],
})
export class ComponentsModule { }
