import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppPetshopPrivateServicesModule { 
  constructor(@Optional() @SkipSelf() appPetshopPrivateServicesModule: AppPetshopPrivateServicesModule) {
    if (appPetshopPrivateServicesModule) {
      throw new TypeError(`appPetshopPrivateServicesModule is imported twice.`);
    }
  }
}
