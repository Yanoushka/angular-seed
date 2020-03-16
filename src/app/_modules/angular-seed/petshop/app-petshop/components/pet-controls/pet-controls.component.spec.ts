import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetControlsComponent } from './pet-controls.component';

describe('PetControlsComponent', () => {
  let component: PetControlsComponent;
  let fixture: ComponentFixture<PetControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
