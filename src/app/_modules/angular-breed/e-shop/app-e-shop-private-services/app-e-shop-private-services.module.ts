import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class AppEShopPrivateServicesModule {
    constructor(
        @Optional()
        @SkipSelf()
        appEShopPrivateServicesModule: AppEShopPrivateServicesModule
    ) {
        if (appEShopPrivateServicesModule) {
            throw new TypeError(
                `appEShopPrivateServicesModule is imported twice.`
            );
        }
    }
}
