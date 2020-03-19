import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppPetshopRoutingModule } from './app-petshop-routing.module';
import { PetshopPageComponent } from './pages/petshop-page/petshop-page.component';
import { PetComponent } from './components/pet/pet.component';
import { PetDetailsPageComponent } from './pages/pet-details-page/pet-details-page.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { PetControlsComponent } from './components/pet-controls/pet-controls.component';
import { AppPipeModule } from 'src/app/_modules/shared/app-pipe/app-pipe.module';

@NgModule({
    declarations: [
        PetshopPageComponent,
        PetComponent,
        PetDetailsPageComponent,
        PetControlsComponent
    ],
    imports: [
        CommonModule,
        AppPetshopRoutingModule,
        AppMaterialModule,
        AppPipeModule
    ]
})
export class AppPetshopModule {}
