import { TestBed } from '@angular/core/testing';

import { PetsListService } from './pets-list.service';

describe('PetsListService', () => {
  let service: PetsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
