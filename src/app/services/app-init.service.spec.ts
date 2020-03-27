import { TestBed } from '@angular/core/testing';

import { AppInitService } from './app-init.service';
import { DefaultService } from '../__modules-swagger-codegen/app-petshop-api';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoggerService } from '../_modules/shared/app-logger/services/logger.service';

describe('AppInitService', () => {
    let service: AppInitService;

    class DefaultServiceDtub {}

    class LoggerServiceStub {
        updateConfig() {}
    }

    class StoreStub {
        pipe() {
            return of([]);
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AppInitService,
                { provide: DefaultService, useClass: DefaultServiceDtub },
                { provide: LoggerService, useClass: LoggerServiceStub },
                { provide: Store, useClass: StoreStub }
            ]
        });
        service = TestBed.inject(AppInitService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
