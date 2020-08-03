import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductBuilder } from 'src/app/_modules/angular-breed/e-cart/app-e-cart/builders/product.builder';
import { Product } from 'src/app/_modules/angular-breed/e-cart/app-e-cart/models/product.model';
import { addProductToCart } from 'src/app/_modules/angular-breed/ngrx-store/app-ngrx-store/app-e-cart-ngrx-store/actions/action';
import { Item } from '../../models/item.model';
import { MatDialog } from '@angular/material/dialog';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
    selector: 'app-item-controls',
    templateUrl: './item-controls.component.html',
    styleUrls: ['./item-controls.component.scss']
})
export class ItemControlsComponent<T extends Item> implements OnInit {
    @Input() item: T;

    itemQuantity = 0;

    constructor(
        private readonly store: Store<{ cart: Product<T>[] }>,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    onIncrement() {
        if (this.itemQuantity < 5) {
            this.itemQuantity++;
        }
    }

    onDecrement() {
        if (this.itemQuantity > 0) {
            this.itemQuantity--;
        }
    }

    onAddToCart() {
        const product = new ProductBuilder()
            .withPet(this.item)
            .setQuantity(this.itemQuantity)
            .build();

        this.store.dispatch(
            addProductToCart({
                product
            })
        );

        this.openItemDialog(this.item);
    }

    openItemDialog(item: Item) {
        const dialogRef = this.dialog.open(ItemModalComponent, {
            data: {
                item: item
            }
        });

        dialogRef.afterClosed();
    }
}
