import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './core/containers/catalog/catalog.component';
import { CartComponent } from './core/containers/cart/cart.component';
import { DetailsComponent } from './core/containers/details/details.component';



const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component : CartComponent, children: [{path: 'details', component : DetailsComponent}]},
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
