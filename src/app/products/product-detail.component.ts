import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {IProduct} from './product';
import { ProductService } from './products.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string = '';
  product: IProduct | undefined;
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { 

              }

  ngOnInit() {

    let param = +this.route.snapshot.paramMap.get('id');
    if (param){
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number){
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
