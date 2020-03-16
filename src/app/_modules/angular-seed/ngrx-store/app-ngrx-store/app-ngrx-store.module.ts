import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppPetshopNgrxStoreModule } from './app-petshop-ngrx-store/app-petshop-ngrx-store.module';
import { AppShoppingCartNgrxStoreModule } from './app-shopping-cart-ngrx-store/app-shopping-cart-ngrx-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppPetshopNgrxStoreModule,
    AppShoppingCartNgrxStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class AppNgrxStoreModule { }
