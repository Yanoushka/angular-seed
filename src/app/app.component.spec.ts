import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { LoggerService } from './_modules/shared/app-logger/services/logger.service';

describe('AppComponent', () => {
    const FRENCH_LANGUAGE = 'fr';
    const FRENCH_TRANSLATIONS = {
        APP: {
            TITLE: 'ANGULAR-SEED',
            SHOPPINGCART: {
                EMPTY: 'Your shopping cart is empty'
            },
            PET: {
                BUTTONS: {
                    DETAILS: 'Details'
                }
            }
        }
    };
    class TranslateServiceStub {
        public onLangChange: EventEmitter<any> = new EventEmitter();
        public onTranslationChange: EventEmitter<any> = new EventEmitter();
        public onDefaultLangChange: EventEmitter<any> = new EventEmitter();
        getTranslation(lang: string): Observable<any> {
            return of(FRENCH_TRANSLATIONS);
        }
        setDefaultLang(lang: string) {}
        use(lang: string) {}
        get(key: any): any {
            return of(key);
        }
    }

    class LoggerServiceStub {
        updateConfig() {}
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
                TranslateTestingModule.withTranslations(
                    FRENCH_LANGUAGE,
                    FRENCH_TRANSLATIONS
                )
            ],
            declarations: [AppComponent],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceStub },
                { provide: LoggerService, useClass: LoggerServiceStub },
                { provide: Store, useClass: StoreStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {});

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-seed'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('angular-seed');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('APP.TITLE');
    });
});
