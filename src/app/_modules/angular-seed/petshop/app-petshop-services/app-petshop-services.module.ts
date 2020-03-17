import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsListResolver } from './resolvers/pets-list.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class AppPetshopServicesModule {
  constructor(@Optional() @SkipSelf() appPetshopServicesModule: AppPetshopServicesModule) {
    if (appPetshopServicesModule) {
      throw new TypeError(`appPetshopServicesModule is imported twice.`);
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: AppPetshopServicesModule,
        providers: [
          PetsListResolver
        ]
    };
  }
}
