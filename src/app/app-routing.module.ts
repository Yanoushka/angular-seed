import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// tslint:disable-next-line: max-line-length
import { PageNotFoundComponent } from './_modules/shared/app-error-pages/pages/page-not-found/page-not-found.component';
import { PetsListResolver } from './_modules/angular-seed/petshop/app-petshop-services/resolvers/pets-list.resolver';

const routes: Routes = [
    {
        path: 'eshop',
        loadChildren: `./_modules/angular-seed/petshop/app-petshop/app-petshop.module#AppPetshopModule`,
        resolve: {
            itemsList: PetsListResolver
        }
    },
    {
        path: 'ecart',
        loadChildren: `./_modules/angular-seed/shoppingCart/app-shopping-cart/app-shopping-cart.module#AppShoppingCartModule`
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
