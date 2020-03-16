import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsPageComponent } from './pet-details-page.component';

describe('PetDetailsPageComponent', () => {
  let component: PetDetailsPageComponent;
  let fixture: ComponentFixture<PetDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
