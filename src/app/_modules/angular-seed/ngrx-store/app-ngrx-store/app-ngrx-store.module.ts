import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPetshopNgrxStoreModule } from './app-petshop-ngrx-store/app-petshop-ngrx-store.module';
import { AppShoppingCartNgrxStoreModule } from './app-shopping-cart-ngrx-store/app-shopping-cart-ngrx-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppPetshopNgrxStoreModule,
    AppShoppingCartNgrxStoreModule
  ]
})
export class AppNgrxStoreModule { }
