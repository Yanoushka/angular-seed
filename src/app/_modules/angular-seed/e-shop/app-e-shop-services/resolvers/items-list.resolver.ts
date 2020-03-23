import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
    DefaultService as EShopService,
    Pet
} from '../../../../../__modules-swagger-codegen/app-petshop-api';
import { LoggerService } from '../../../../shared/app-logger/services/logger.service';

@Injectable()
export class ItemsListResolver implements Resolve<Pet[]> {
    list: Pet[];

    constructor(
        private readonly petshopService: EShopService,
        private readonly loggerService: LoggerService
    ) {}

    resolve(): Observable<Pet[]> {
        return this.petshopService.findPets().pipe(
            catchError(error => {
                this.loggerService.ngxLogger.error(
                    `ItemsListResolver - resolve() => ${error}`
                );

                return new Observable<Pet[]>();
            })
        );
    }
}
