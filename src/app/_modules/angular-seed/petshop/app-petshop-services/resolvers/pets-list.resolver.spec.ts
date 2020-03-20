import { TestBed } from '@angular/core/testing';
import { PetsListResolver } from './pets-list.resolver';

describe('PetsListService', () => {
    let service: PetsListResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PetsListResolver);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
