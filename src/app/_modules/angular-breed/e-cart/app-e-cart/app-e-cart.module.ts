import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppECartRoutingModule } from './app-e-cart-routing.module';
import { ECartPageComponent } from './pages/e-cart-page/e-cart-page.component';
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
    declarations: [ECartPageComponent],
    imports: [
        CommonModule,
        AppECartRoutingModule,
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
export class AppECartModule {}
