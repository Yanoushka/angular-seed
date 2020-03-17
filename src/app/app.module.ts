import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPetshopModule } from './_modules/angular-seed/petshop/app-petshop/app-petshop.module';
import { AppMaterialModule } from './_modules/shared/app-material/app-material.module';
import { AppErrorPagesModule } from './_modules/shared/app-error-pages/app-error-pages.module';
import { ApiModule as PetshopApiModule, BASE_PATH} from './_modules/angular-seed/petshop/app-petshop-api';
import { environment } from 'src/environments/environment';
import { AppNgrxStoreModule } from './_modules/angular-seed/ngrx-store/app-ngrx-store/app-ngrx-store.module';
import { AppPetshopServicesModule } from './_modules/angular-seed/petshop/app-petshop-services/app-petshop-services.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
      },
    }),
    AppMaterialModule,
    AppPetshopModule,
    AppErrorPagesModule,
    PetshopApiModule,
    AppPetshopServicesModule.forRoot(),
    AppNgrxStoreModule,
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent],
})
export class AppModule { }
