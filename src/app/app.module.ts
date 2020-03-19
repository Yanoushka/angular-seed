import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPetshopModule } from './_modules/angular-seed/petshop/app-petshop/app-petshop.module';
import { AppMaterialModule } from './_modules/shared/app-material/app-material.module';
import { AppErrorPagesModule } from './_modules/shared/app-error-pages/app-error-pages.module';
import {
    ApiModule as PetshopApiModule,
    BASE_PATH
} from './_modules/angular-seed/petshop/app-petshop-api';
import { environment } from '../environments/environment';
import { AppNgrxStoreModule } from './_modules/angular-seed/ngrx-store/app-ngrx-store/app-ngrx-store.module';
import { AppPetshopServicesModule } from './_modules/angular-seed/petshop/app-petshop-services/app-petshop-services.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppInitService } from './services/app-init.service';
import { AppLoggerModule } from './_modules/shared/app-logger/app-logger.module';
import { AppPipeModule } from './_modules/shared/app-pipe/app-pipe.module';
import { AppShoppingCartModule } from './_modules/angular-seed/shoppingCart/app-shopping-cart/app-shopping-cart.module';

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
        AppPetshopModule,
        AppShoppingCartModule,
        AppErrorPagesModule,
        PetshopApiModule,
        AppPetshopServicesModule.forRoot(),
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
