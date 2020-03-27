import { TestBed } from '@angular/core/testing';

import { ItemsListResolver } from './items-list.resolver';
import { DefaultService } from '../__modules-swagger-codegen/app-petshop-api';
import { LoggerService } from '../_modules/shared/app-logger/services/logger.service';
import { of } from 'rxjs';

describe('PetsListService', () => {
    class DefaultServiceStub {
        findPets() {
            return new DefaultServiceStub();
        }
        pipe() {
            return of([{ id: 666 }]);
        }
    }
    class LoggerServiceStub {}

    let service: ItemsListResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ItemsListResolver,
                { provide: LoggerService, useClass: LoggerServiceStub },
                { provide: DefaultService, useClass: DefaultServiceStub }
            ]
        });
        service = TestBed.inject(ItemsListResolver);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return list', done => {
        service.resolve().subscribe(list => {
            expect(list).toBeTruthy();
            expect(list[0].id).toEqual(666);
            done();
        });
    });
});
