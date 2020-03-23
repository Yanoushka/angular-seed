import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsPageComponent } from './item-details-page.component';

describe('ItemDetailsPageComponent', () => {
    let component: ItemDetailsPageComponent;
    let fixture: ComponentFixture<ItemDetailsPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemDetailsPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render template', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain(
            'item-details-page works!'
        );
    });
});
