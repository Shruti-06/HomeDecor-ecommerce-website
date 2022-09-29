import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cart} from '../cart.model';
import {CartServices} from '../cart2.service';
import {Order} from '../order.model';
import {NeworderServices} from '../neworder.service';

@Component({
  selector: 'app-register',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private http: HttpClient, private cartSer: CartServices, private newOrd: NeworderServices) { }
  cart: Cart[];
  final_total=0;

  ngOnInit(): void {
    this.cart = this.cartSer.getcart();
    for(let i of this.cart)
    {
      this.final_total = this.final_total + i.product_total;
    }
  }

  deleteCart(index: number)
  {
    this.cartSer.deleteCart(index);
    this.cart = this.cartSer.getcart();
    let newTotalAmount = 0;
    for(let i of this.cart)
    {
      newTotalAmount += (i.product_total)
    }
    this.final_total = newTotalAmount;
  }

  placeorder2()
  {
    for(let i of this.cart)
    {
      const items = new Order(i.product_id,i.product_name,i.product_count,i.product_price);
      this.newOrd.addtoOrder(items);
    }

    let products2:Order[];

    products2 = this.newOrd.getOrder();
    let amount = this.final_total;
    let address = "Pune";
    let user = "5ef4676520d1eb4f24fa7b81";

    let postData =
    {
      products : products2,
      amount : amount,
      address : address,
      user : user
    }
    this.http.post('http://localhost:3000/api/order/create', postData).subscribe(responseData =>{
      console.log(responseData);

      alert("Order is created!!!");
    });
    
  }

}
