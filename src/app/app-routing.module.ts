import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsPageComponent } from './views/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './views/products-page/products-page.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'product/:id', component: ProductDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
