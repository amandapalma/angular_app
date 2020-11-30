import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Landing } from './core/landing/landing.component';
import { SiteComponent } from './core/site/site.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterComponent } from './core/site/router/router.component';
import { CatalogComponent } from './core/site/router/catalog/catalog.component';
import { ItemDetailsComponent } from './core/site/router/item-details/item-details.component';
import { CartComponent } from './core/site/router/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    Landing,
    SiteComponent,
    HeaderComponent,
    RouterComponent,
    CatalogComponent,
    ItemDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
