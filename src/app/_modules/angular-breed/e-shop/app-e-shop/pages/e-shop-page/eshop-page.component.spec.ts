import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EShopPageComponent } from './eshop-page.component';
import { ItemComponent } from '../../components/item/item.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ItemControlsComponent } from '../../components/item-controls/item-controls.component';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('EShopPageComponent', () => {
    let component: EShopPageComponent<any>;
    let fixture: ComponentFixture<EShopPageComponent<any>>;

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

    class ActivatedRouteStub {
        data = { pipe: () => of([]) };
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                TranslateTestingModule
            ],
            declarations: [
                EShopPageComponent,
                ItemComponent,
                ItemControlsComponent
            ],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EShopPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
