import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { postPetsList } from 'src/app/_modules/angular-seed/ngrx-store/app-ngrx-store/app-petshop-ngrx-store/actions/action';
import { Pet } from '../../../app-petshop-api';
import { ProductBuilder } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/builders/product.builder';
import { Product } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';
import { addPetToCart } from 'src/app/_modules/angular-seed/ngrx-store/app-ngrx-store/app-shopping-cart-ngrx-store/actions/action';

@Component({
    selector: 'app-pet-controls',
    templateUrl: './pet-controls.component.html',
    styleUrls: ['./pet-controls.component.scss']
})
export class PetControlsComponent implements OnInit {
    @Input() pet: Pet;

    petQuantity = 0;

    constructor(private readonly store: Store<{ cart: Product[] }>) {}

    ngOnInit(): void {}

    onIncrement() {
        if (this.petQuantity < 5) {
            this.petQuantity++;
        }
        console.log(this.pet);
    }

    onDecrement() {
        if (this.petQuantity > 0) {
            this.petQuantity--;
        }
    }

    onAddToCart() {
        const product = new ProductBuilder()
            .withPet(this.pet)
            .setQuantity(this.petQuantity)
            .build();

        this.store.dispatch(
            addPetToCart({
                product
            })
        );
    }
}
