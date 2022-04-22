import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeElementsListComponent } from './components/time-elements-list/time-elements-list.component';
import { TimeElementComponent } from './components/time-element/time-element.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsPageComponent } from './views/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './views/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeElementsListComponent,
    TimeElementComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsPageComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
