import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
    let service: LoggerService;

    class LoggerServiceStub {}

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: LoggerService, useClass: LoggerServiceStub }]
        });
        service = TestBed.inject(LoggerService);
    });

    fit('should be created', () => {
        expect(service).toBeTruthy();
    });
});
