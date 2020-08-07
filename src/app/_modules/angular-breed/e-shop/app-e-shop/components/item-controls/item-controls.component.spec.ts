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
        select() {
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
        component.item = {
            id: 1,
            name: 'Shiba Inu',
            avatar: 'assets/images/shiba1.jpg',
            category: 'Dog Breed',
            image: 'assets/images/shiba2.jpg',
            desc:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            stock: 3
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should increase itemQuantity by 1 and decrease itemStock by 1 when button is clicked', () => {
        component.onIncrement();
        expect(component.itemQuantity).toBe(1);
        expect(component.itemStock).toBe(2);
    });

    it('should decrease itemQuantity by 1 and increase itemStock by 1 when button is clicked', () => {
        component.onDecrement();
        expect(component.itemQuantity).toBe(0);
        expect(component.itemStock).toBe(3);
    });
});
