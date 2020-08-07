import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { ItemModalComponent } from './item-modal.component';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemModalComponent', () => {
    let component: ItemModalComponent;
    let fixture: ComponentFixture<ItemModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppMaterialModule, RouterTestingModule],
            declarations: [ItemModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialog, useValue: {} }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemModalComponent);
        component = fixture.componentInstance;

        component.data.item = {
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
});
