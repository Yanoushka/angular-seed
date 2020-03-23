import { TestBed } from '@angular/core/testing';

import { AppEshopApiService } from './app-eshop-api.service';

describe('AppEshopApiService', () => {
    let service: AppEshopApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppEshopApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
