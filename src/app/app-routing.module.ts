import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// tslint:disable-next-line: max-line-length
import { PageNotFoundComponent } from './_modules/shared/app-error-pages/pages/page-not-found/page-not-found.component';
import { ItemsListResolver } from './_modules/angular-seed/e-shop/app-e-shop-services/resolvers/items-list.resolver';

const routes: Routes = [
    {
        path: 'eshop',
        loadChildren: `./_modules/angular-seed/e-shop/app-e-shop/app-e-shop.module#AppEShopModule`,
        resolve: {
            itemsList: ItemsListResolver
        }
    },
    {
        path: 'ecart',
        loadChildren: `./_modules/angular-seed/e-cart/app-e-cart/app-e-cart.module#AppECartModule`
    },
    {
        path: '',
        redirectTo: 'eshop',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            useHash: true,
            preloadingStrategy: PreloadAllModules,
            initialNavigation: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
