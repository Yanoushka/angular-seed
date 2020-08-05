import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductBuilder } from 'src/app/_modules/angular-breed/e-cart/app-e-cart/builders/product.builder';
import { Product } from 'src/app/_modules/angular-breed/e-cart/app-e-cart/models/product.model';
import { addProductToCart } from 'src/app/_modules/angular-breed/ngrx-store/app-ngrx-store/app-e-cart-ngrx-store/actions/action';
import { Item } from '../../models/item.model';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
    selector: 'app-item-controls',
    templateUrl: './item-controls.component.html',
    styleUrls: ['./item-controls.component.scss']
})
export class ItemControlsComponent<T extends Item> implements OnInit {
    @Input() item: T;

    itemQuantity = 0;
    itemStock = 0;
    itemOutOfStock = false;
    fullCart: any;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly store: Store<{ cart: Product<T>[] }>,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.subscribeCart().then(() => {
            this.defineItemStock();
        });
    }

    async subscribeCart() {
        return this.store.select('cart').subscribe(state => {
            this.fullCart = state;
        });
    }

    defineItemStock() {
        const itemToUpdate = this.fullCart.cart.find(
            element => element.payload.id === this.item.id
        );
        this.itemStock = itemToUpdate
            ? this.item.stock - itemToUpdate.quantity
            : this.item.stock;
        this.itemOutOfStock = this.itemStock === 0 ? true : false;
    }

    onIncrement() {
        if (this.itemQuantity < 5 && this.itemStock > 0) {
            this.itemQuantity++;
            this.itemStock--;
        }
    }

    onDecrement() {
        if (this.itemQuantity > 0) {
            this.itemQuantity--;
            this.itemStock++;
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
        this.itemQuantity = 0;
    }

    openItemDialog(item: Item) {
        const dialogRef = this.dialog.open(ItemModalComponent, {
            data: {
                item: item
            }
        });

        dialogRef.afterClosed().subscribe(() => {
            this.itemOutOfStock = this.itemStock === 0 ? true : false;
            this.subscribeCart();
        });
    }
}
