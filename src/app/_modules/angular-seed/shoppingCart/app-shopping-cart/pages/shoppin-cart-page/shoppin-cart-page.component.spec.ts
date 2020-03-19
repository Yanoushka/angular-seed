import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinCartPageComponent } from './shoppin-cart-page.component';

describe('ShoppinCartPageComponent', () => {
    let component: ShoppinCartPageComponent;
    let fixture: ComponentFixture<ShoppinCartPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppinCartPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppinCartPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
