import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartServices } from '../cart2.service';
import { Cart } from '../cart.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id: number;
  products : any;
  @ViewChild('ingre_qty') ingre_qty : ElementRef;

  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient,
    private cartServi:CartServices) { }

  ngOnInit(): void {
    let id2 = this.route.snapshot.paramMap.get('id');

    this.http.get("http://localhost:3000/api/product/"+id2).subscribe(posts =>{
      console.log("array"+posts);
      this.products = posts;
    });
    this.http.get("http://localhost:3000/api/product1/"+id2).subscribe(posts =>{
      console.log("array"+posts);
      this.products = posts;
    });
    this.http.get("http://localhost:3000/api/product2/"+id2).subscribe(posts =>{
      console.log("array"+posts);
      this.products = posts;
    });
    this.http.get("http://localhost:3000/api/product3/"+id2).subscribe(posts =>{
      console.log("array"+posts);
      this.products = posts;
    });
  }
  
  addTocart()
    {
      console.log(this.products._id);
      cart :Cart;
      const qty = this.ingre_qty.nativeElement.value;

      let id = this.products._id;
      let product_name = this.products.name;
      let product_count = qty;
      let product_image = this.products.productImagePath;
      let product_price = this.products.price;
      let product_total = qty * product_price;

      console.log(this.products.name);
      console.log(qty);
      const cartItems = new Cart(this.products._id,product_name,product_count,product_image,product_price,product_total);

      console.log(cartItems);
       this.cartServi.addCart(cartItems);
      this.router.navigateByUrl('/mycart');
    }

}
