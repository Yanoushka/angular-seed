import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { removePetFromCart } from 'src/app/_modules/angular-seed/ngrx-store/app-ngrx-store/app-shopping-cart-ngrx-store/actions/action';

@Component({
    selector: 'app-shoppin-cart-page',
    templateUrl: './shoppin-cart-page.component.html',
    styleUrls: ['./shoppin-cart-page.component.scss']
})
export class ShoppinCartPageComponent implements OnInit {
    products$: Observable<Product[]>;

    constructor(private readonly store: Store<{ cart: Product[] }>) {}

    ngOnInit(): void {
        this.products$ = this.store.pipe(
            select('cart'),
            map((state: any) => state.cart),
            tap(cart => console.log(cart))
        );
    }

    onDelete(product: Product) {
        this.store.dispatch(removePetFromCart({ product }));
    }

    stringifyObject(object: object) {
        return JSON.stringify(object);
    }
}
