import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DefaultService as PetshopService, Pet } from '../../app-petshop-api';

@Injectable()
export class PetsListResolver implements Resolve<Pet[]> {
    constructor(private readonly petshopService: PetshopService) {}

    resolve(): Observable<Pet[]> {
        return this.petshopService.findPets();
    }
}
