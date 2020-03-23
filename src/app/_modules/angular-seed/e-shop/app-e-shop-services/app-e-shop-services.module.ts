import {
    NgModule,
    ModuleWithProviders,
    SkipSelf,
    Optional
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListResolver } from '../../../../resolvers/items-list.resolver';

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class AppEShopServicesModule {
    constructor(
        @Optional() @SkipSelf() appEShopServicesModule: AppEShopServicesModule
    ) {
        if (appEShopServicesModule) {
            throw new TypeError(`appEShopServicesModule is imported twice.`);
        }
    }
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppEShopServicesModule,
            providers: []
        };
    }
}
