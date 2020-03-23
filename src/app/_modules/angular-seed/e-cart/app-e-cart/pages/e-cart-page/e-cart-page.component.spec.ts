import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECartPageComponent } from './e-cart-page.component';
import { EventEmitter } from '@angular/core';
import { of, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { Store } from '@ngrx/store';

describe('ECartPageComponent', () => {
    let component: ECartPageComponent<any>;
    let fixture: ComponentFixture<ECartPageComponent<any>>;

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
                // RouterTestingModule,
                TranslateTestingModule
            ],
            declarations: [ECartPageComponent],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceStub },
                { provide: Store, useClass: StoreStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ECartPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
