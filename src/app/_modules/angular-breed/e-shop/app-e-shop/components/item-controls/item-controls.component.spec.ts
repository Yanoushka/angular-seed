import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemControlsComponent } from './item-controls.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('ItemControlsComponent', () => {
    let component: ItemControlsComponent<any>;
    let fixture: ComponentFixture<ItemControlsComponent<any>>;

    class StoreStub {
        pipe() {
            return of([]);
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemControlsComponent],
            providers: [{ provide: Store, useClass: StoreStub }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
