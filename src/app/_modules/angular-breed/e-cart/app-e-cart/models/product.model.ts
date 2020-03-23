import { Item } from '../../../e-shop/app-e-shop/models/item.model';

export class Product<T extends Item> {
    payload: T;
    quantity: number;
}
