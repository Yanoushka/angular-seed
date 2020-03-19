import { Product } from 'src/app/_modules/angular-seed/shoppingCart/app-shopping-cart/models/product.model';

export interface State {
    cart: Product[];
}

export const initialState: State = {
    cart: []
};
