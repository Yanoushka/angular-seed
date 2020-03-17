import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { DefaultService, Pet } from '../../app-petshop-api';

@Injectable()
export class PetsListResolver implements Resolve<Pet[]> {

  constructor(private readonly defaultService: DefaultService) { }

  resolve(): Observable<Pet[]> {

    // return this.defaultService.findPets();
    return of([{id: 1, name: 'toto'}, {id: 2, name: 'tata'}]);
  }
}
