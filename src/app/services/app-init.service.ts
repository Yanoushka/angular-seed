import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
    DefaultService as PetsServices,
    Pet
} from '../_modules/angular-seed/petshop/app-petshop-api';
import { postPetsList } from '../_modules/angular-seed/ngrx-store/app-ngrx-store/app-petshop-ngrx-store/actions/action';

@Injectable({
    providedIn: 'root'
})
export class AppInitService {
    constructor(
        private readonly petsServices: PetsServices,
        private readonly store: Store<{ petsList: Array<any> }>
    ) {}

    async Init() {
        return new Promise<void>((resolve, reject) => {
            this.petsServices
                .findPets()
                .pipe(
                    catchError(error => {
                        console.log(error);
                        reject();

                        return new Observable<Pet[]>();
                    })
                )
                .subscribe(petsList => {
                    this.store.dispatch(postPetsList({ petsList }));
                    resolve();
                });
        });
    }
}
