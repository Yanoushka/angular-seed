import { Item } from '../../../e-shop/app-e-shop/models/item.model';
import { Product } from '../models/product.model';

export class ProductBuilder<T extends Item> {
    private readonly _product: Product<T> = new Product<T>();

    withPet(item: T) {
        this._product.payload = item;

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
