import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './_modules/shared/app-logger/services/logger.service';

import { Store, select } from '@ngrx/store';
import { Product } from './_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-seed';

    products$: Observable<Product[]>;

    constructor(
        translate: TranslateService,
        private readonly loggerService: LoggerService,
        private readonly store: Store<{ cart: Product[] }>
    ) {
        translate.setDefaultLang('fr-FR');
        translate.use('fr-FR');
    }

    ngOnInit() {
        this.loggerService.updateConfig();

        this.products$ = this.store.pipe(
            select('cart'),
            map((state: any) => state.cart),
            tap(cart => console.log(cart))
        );
    }
}
