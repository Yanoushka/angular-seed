import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetshopPageComponent } from './pages/petshop-page/petshop-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            component: PetshopPageComponent,
        },
        {
            path: '**',
            redirectTo: '',
        },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPetshopRoutingModule { }
