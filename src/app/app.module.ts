import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
   MatButtonModule,
   MatGridListModule,
   MatCardModule,
   MatProgressBarModule,
  } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './productMask/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TabletComponent } from './tablet/tablet.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const myRoutes: Routes = [
  {path: 'home', component: HomepageComponent},
  
  {path: 'product', component: ProductComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'productOverview', component: ProductOverviewComponent},
  {path: 'tablet', component: TabletComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductComponent,
    ShoppingCartComponent,
    ProductOverviewComponent,
    ProductListComponent,
    TabletComponent
  ],
  imports: [
    RouterModule.forRoot(myRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
