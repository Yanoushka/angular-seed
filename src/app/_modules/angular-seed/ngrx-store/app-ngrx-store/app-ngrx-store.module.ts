import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppEShopNgrxStoreModule } from './app-e-shop-ngrx-store/app-e-shop-ngrx-store.module';
import { AppECartNgrxStoreModule } from './app-e-cart-ngrx-store/app-e-cart-ngrx-store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AppEShopNgrxStoreModule,
        AppECartNgrxStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        })
    ]
})
export class AppNgrxStoreModule {}
