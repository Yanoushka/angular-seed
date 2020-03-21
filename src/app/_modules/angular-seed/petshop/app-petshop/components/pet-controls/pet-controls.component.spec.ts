import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetControlsComponent } from './pet-controls.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('PetControlsComponent', () => {
    let component: PetControlsComponent;
    let fixture: ComponentFixture<PetControlsComponent>;

    class StoreStub {
        pipe() {
            return of([]);
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PetControlsComponent],
            providers: [{ provide: Store, useClass: StoreStub }]
        }).compileComponents();
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
