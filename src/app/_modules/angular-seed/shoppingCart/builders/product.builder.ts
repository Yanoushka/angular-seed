import { Product } from '../app-shopping-cart/models/product.model';
import { Pet } from '../../petshop/app-petshop-api';

export class ProductBuilder {
    private readonly _product: Product = new Product();

    withPet(pet: Pet) {
        this._product.payload = pet;

        return this;
    }

    setQuantity(quantity: number) {
        this._product.quantity = quantity;

        return this;
    }

    build() {
        return this._product;
    }
}
