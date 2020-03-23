import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import {
    DefaultService as PetsServices,
    Pet
} from '../__modules-swagger-codegen/app-petshop-api';
import { postItemsList } from '../_modules/angular-seed/ngrx-store/app-ngrx-store/app-e-shop-ngrx-store/actions/action';
import { LoggerService } from '../_modules/shared/app-logger/services/logger.service';

@Injectable({
    providedIn: 'root'
})
export class AppInitService {
    constructor(
        private readonly petsServices: PetsServices,
        private readonly store: Store<{ itemsList: Array<any> }>,
        private readonly loggerService: LoggerService
    ) {}

    async Init() {
        return new Promise<void>((resolve, reject) => {
            this.petsServices
                .findPets()
                .pipe(
                    catchError(error => {
                        this.loggerService.ngxLogger.error(
                            `AppInitService - Init() => ${error}`
                        );
                        reject();

                        return new Observable<Pet[]>();
                    })
                )
                .subscribe(itemsList => {
                    this.loggerService.ngxLogger.debug(
                        `AppInitService - Init() => Retrieve pets list successful`
                    );
                    this.store.dispatch(postItemsList({ itemsList }));
                    this.loggerService.ngxLogger.debug(
                        `AppInitService - Init() => Pets list post in Ngrx Store`
                    );
                    resolve();
                });
        });
    }
}
