import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

import { ItemComponent } from './item.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { ItemControlsComponent } from '../item-controls/item-controls.component';
import { Store } from '@ngrx/store';

describe('ItemComponent', () => {
    let component: ItemComponent<any>;
    let fixture: ComponentFixture<ItemComponent<any>>;

    class TranslateServiceStub {
        public onLangChange: EventEmitter<any> = new EventEmitter();
        public onTranslationChange: EventEmitter<any> = new EventEmitter();
        public onDefaultLangChange: EventEmitter<any> = new EventEmitter();
        getTranslation(lang: string): Observable<any> {
            return of();
        }
        setDefaultLang(lang: string) {}
        use(lang: string) {}
        get(key: any): any {
            return of(key);
        }
    }

    class StoreStub {
        pipe() {
            return of([]);
        }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AppMaterialModule,
                TranslateTestingModule
            ],
            declarations: [ItemComponent, ItemControlsComponent],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceStub },
                { provide: Store, useClass: StoreStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemComponent);

        component = fixture.componentInstance;

        component.item = {
            id: 1,
            name: 'Shiba Inu',
            avatar: 'assets/images/shiba1.jpg',
            category: 'Dog Breed',
            image: 'assets/images/shiba2.jpg',
            desc:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
