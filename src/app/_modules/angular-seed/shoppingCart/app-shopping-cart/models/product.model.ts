import { Pet } from 'src/app/__modules-swagger-codegen/app-petshop-api';
import { Item } from '../../../petshop/models/item.model';

export class Product<T extends Item> {
    payload: T;
    quantity: number;
}
