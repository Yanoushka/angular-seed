import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetshopPageComponent } from './pages/petshop-page/petshop-page.component';
import { PetDetailsPageComponent } from './pages/pet-details-page/pet-details-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PetshopPageComponent
            },
            {
                path: 'pet/:petId',
                component: PetDetailsPageComponent
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
export class AppPetshopRoutingModule {}
