import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/internal/operators/map';
import { removeProductFromCart } from 'src/app/_modules/angular-breed/ngrx-store/app-ngrx-store/app-e-cart-ngrx-store/actions/action';
import { Item } from 'src/app/_modules/angular-breed/e-shop/app-e-shop/models/item.model';

@Component({
    selector: 'app-cart-table',
    templateUrl: './cart-table.component.html',
    styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent<T extends Item> implements OnInit {
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
}
