import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: Product = {} as Product;

  ProductId: number;
  private productService: ProductService

  constructor(activatedRoute: ActivatedRoute, productService: ProductService) {
    this.ProductId = activatedRoute.snapshot.params.productID
    this.productService = productService
   }

  ngOnInit(): void {
    this.getOneProduct(this.ProductId)
  }

  getOneProduct(id: number) {
    let product: Product
    this.productService
    .getOneProduct(id)
    .subscribe(p => this.product = p)
  }

}
