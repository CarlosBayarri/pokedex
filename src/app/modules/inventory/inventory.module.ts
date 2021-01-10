import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { RandomButtonComponent } from './components/random-button/random-button.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { InventoryRoutesModule } from './inventory-routes.module';



@NgModule({
  declarations: [ListComponent, DetailComponent, RandomButtonComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    InventoryRoutesModule
  ]
})
export class InventoryModule { }
