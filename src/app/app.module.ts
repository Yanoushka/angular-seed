import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEShopModule } from './_modules/angular-seed/e-shop/app-e-shop/app-e-shop.module';
import { AppMaterialModule } from './_modules/shared/app-material/app-material.module';
import { AppErrorPagesModule } from './_modules/shared/app-error-pages/app-error-pages.module';
import {
    ApiModule as EShopApiModule,
    BASE_PATH
} from './__modules-swagger-codegen/app-petshop-api';
import { environment } from '../environments/environment';
import { AppNgrxStoreModule } from './_modules/angular-seed/ngrx-store/app-ngrx-store/app-ngrx-store.module';
import { AppEShopServicesModule } from './_modules/angular-seed/e-shop/app-e-shop-services/app-e-shop-services.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppInitService } from './services/app-init.service';
import { AppLoggerModule } from './_modules/shared/app-logger/app-logger.module';
import { AppECartModule } from './_modules/angular-seed/e-cart/app-e-cart/app-e-cart.module';
import { ItemsListResolver } from './resolvers/items-list.resolver';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function initializeApp(appInitService: AppInitService) {
    return async (): Promise<any> => {
        return appInitService.Init();
    };
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppMaterialModule,
        AppEShopModule,
        AppECartModule,
        AppErrorPagesModule,
        EShopApiModule,
        AppEShopServicesModule.forRoot(),
        AppNgrxStoreModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production
        }),
        LoggerModule.forRoot({
            level: NgxLoggerLevel.INFO,
            serverLogLevel: NgxLoggerLevel.OFF
        }),
        AppLoggerModule.forRoot()
    ],
    providers: [
        { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
        AppInitService,
        ItemsListResolver,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppInitService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
