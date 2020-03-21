import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

import { PetComponent } from './pet.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { PetControlsComponent } from '../pet-controls/pet-controls.component';
import { Store } from '@ngrx/store';

describe('PetComponent', () => {
    let component: PetComponent;
    let fixture: ComponentFixture<PetComponent>;

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
            declarations: [PetComponent, PetControlsComponent],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceStub },
                { provide: Store, useClass: StoreStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
