import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShoppingCartRoutingModule } from './app-shopping-cart-routing.module';
import { ShoppinCartPageComponent } from './pages/shoppin-cart-page/shoppin-cart-page.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
// tslint:disable-next-line: only-arrow-functions
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [ShoppinCartPageComponent],
    imports: [
        CommonModule,
        AppShoppingCartRoutingModule,
        AppMaterialModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]
})
export class AppShoppingCartModule {}
