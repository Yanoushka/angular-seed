import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EShopPageComponent } from './pages/e-shop-page/eshop-page.component';
import { ItemDetailsPageComponent } from './pages/item-details-page/item-details-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: EShopPageComponent
            },
            {
                path: 'item/:itemId',
                component: ItemDetailsPageComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppEShopRoutingModule {}
