import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './core/containers/landing/landing.component';
import { SiteComponent } from './core/containers/site/site.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterComponent } from './core/components/router/router.component';
import { CatalogComponent } from './core/containers/catalog/catalog.component';
import { ItemDetailsComponent } from './core/components/item-details/item-details.component';
import { CartComponent } from './core/containers/cart/cart.component';
import { CatalogItemComponent } from './core/components/catalog-item/catalog-item.component';
import { DetailsComponent } from './core/containers/details/details.component';
import { ItemDetailsActionsComponent } from './core/components/item-details-actions/item-details-actions.component';
import { CartItemComponent } from './core/components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SiteComponent,
    HeaderComponent,
    RouterComponent,
    CatalogComponent,
    ItemDetailsComponent,
    CartComponent,
    CatalogItemComponent,
    DetailsComponent,
    ItemDetailsActionsComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
