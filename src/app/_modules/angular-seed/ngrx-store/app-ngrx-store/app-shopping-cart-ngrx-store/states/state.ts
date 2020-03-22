import { Product } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';
import { Item } from 'src/app/_modules/angular-seed/petshop/models/item.model';

export interface State {
    cart: [];
}

export const initialState: State = {
    cart: []
};
