import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { ItemControlsComponent } from './item-controls.component';
import { RouterTestingModule } from '@angular/router/testing';

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
            imports: [AppMaterialModule, RouterTestingModule],
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

    // it('should increase itemQuantity by 1', () => {
    //     component.onIncrement();
    //     expect(component.itemQuantity).toBe(1);
    //     // expect(component.itemStock).toBe(-1);
    // })

    // // it('should increase itemQuantity by 1', () => {
    // //     component.onIncrement();
    // //     expect(component.itemQuantity).toBe(1);
    // //     // expect(component.itemStock).toBe(-1);
    // // })
});
