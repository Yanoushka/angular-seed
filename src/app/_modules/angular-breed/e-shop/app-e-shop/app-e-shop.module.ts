import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppEShopRoutingModule } from './app-e-shop-routing.module';
import { EShopPageComponent } from './pages/e-shop-page/eshop-page.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDetailsPageComponent } from './pages/item-details-page/item-details-page.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { ItemControlsComponent } from './components/item-controls/item-controls.component';
import { AppPipeModule } from 'src/app/_modules/shared/app-pipe/app-pipe.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ItemModalComponent } from './components/item-modal/item-modal.component';

// AoT requires an exported function for factories
// tslint:disable-next-line: only-arrow-functions
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        EShopPageComponent,
        ItemComponent,
        ItemDetailsPageComponent,
        ItemControlsComponent,
        ItemModalComponent
    ],
    imports: [
        CommonModule,
        AppEShopRoutingModule,
        AppMaterialModule,
        AppPipeModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ]
})
export class AppEShopModule {}
