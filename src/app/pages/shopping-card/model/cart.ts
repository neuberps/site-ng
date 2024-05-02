import { Product } from './../../product/model/product';

export class Cart{
  products:Product[]= [];
  quantityCart: number = 0;
  totalCart:number = 0;
}
