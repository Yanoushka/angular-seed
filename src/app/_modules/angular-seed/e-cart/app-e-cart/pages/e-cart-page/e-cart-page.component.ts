import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { removeProductFromCart } from 'src/app/_modules/angular-seed/ngrx-store/app-ngrx-store/app-e-cart-ngrx-store/actions/action';
import { Item } from 'src/app/_modules/angular-seed/e-shop/app-e-shop/models/item.model';

@Component({
    selector: 'app-e-cart-page',
    templateUrl: './e-cart-page.component.html',
    styleUrls: ['./e-cart-page.component.scss']
})
export class ECartPageComponent<T extends Item> implements OnInit {
    products$: Observable<Product<T>[]>;

    constructor(private readonly store: Store<{ cart: Product<T>[] }>) {}

    ngOnInit(): void {
        this.products$ = this.store.pipe(
            select('cart'),
            map((state: any) => state.cart)
        );
    }

    onDelete(product: Product<T>) {
        this.store.dispatch(removeProductFromCart({ product }));
    }

    stringifyObject(object: object) {
        return JSON.stringify(object);
    }
}
