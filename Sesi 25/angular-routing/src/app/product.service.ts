import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './models/product';
import { PRODUCTS } from './models/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = of(PRODUCTS)

  constructor() { }

  getProducts (): Observable<Product[]>{
    const products = of(PRODUCTS);

    return products
  }

  getOneProduct (id: number): Observable<Product> {
    return this.products
      .pipe(
        map(products => products.find(p => p.id == id)!)
      )
  }
  
}