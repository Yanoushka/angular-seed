import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshopPageComponent } from './petshop-page.component';
import { PetComponent } from '../../components/pet/pet.component';
import { AppMaterialModule } from 'src/app/_modules/shared/app-material/app-material.module';
import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { PetControlsComponent } from '../../components/pet-controls/pet-controls.component';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PetshopPageComponent', () => {
    let component: PetshopPageComponent;
    let fixture: ComponentFixture<PetshopPageComponent>;

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
                PetshopPageComponent,
                PetComponent,
                PetControlsComponent
            ],
            providers: [
                { provide: TranslateService, useClass: TranslateServiceStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PetshopPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
