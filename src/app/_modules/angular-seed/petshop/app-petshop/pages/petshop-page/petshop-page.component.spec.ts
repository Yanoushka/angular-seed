import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopPageComponent } from './petshop-page.component';

describe('PetshopPageComponent', () => {
  let component: PetshopPageComponent;
  let fixture: ComponentFixture<PetshopPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshopPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
