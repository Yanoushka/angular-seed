import { Product } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';

export interface State {
    cart: Array<Product>;
}

export const initialState: State = {
    cart: []
};
