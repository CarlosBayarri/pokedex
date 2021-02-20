import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
  { 
    path: 'cover',
    loadChildren: () => import('./modules/cover/cover.module').then(m => m.CoverModule)
  },
  { 
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule)
  },
  { 
    path: 'regions',
    loadChildren: () => import('./modules/regions/regions.module').then(m => m.RegionsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
