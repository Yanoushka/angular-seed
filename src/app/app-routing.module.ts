import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// tslint:disable-next-line: max-line-length
import { PetshopPageComponent } from './_modules/angular-seed/petshop/app-petshop/pages/petshop-page/petshop-page.component';
import { PageNotFoundComponent } from './_modules/shared/app-error-pages/pages/page-not-found/page-not-found.component';
import { PetsListResolver } from './_modules/angular-seed/petshop/app-petshop-services/resolvers/pets-list.resolver';

const routes: Routes = [
  {
    path: 'petshop',
    loadChildren:
    // tslint:disable-next-line: max-line-length
    `./_modules/angular-seed/petshop/app-petshop/app-petshop.module#AppPetshopModule`,
    component: PetshopPageComponent,
    resolve: {
      petsList: PetsListResolver
    }
   },
  {
    path: '',
    redirectTo: 'petshop',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
   },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
