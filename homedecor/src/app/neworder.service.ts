import {EventEmitter} from '@angular/core';
import {Order} from './order.model';

export class NeworderServices
{
    Orderchanged = new EventEmitter<Order[]>();
    order : Order[]=[];

    getOrder()
    {
        return this.order.slice();
    }

    addtoOrder(orderitems:Order)
    {
        this.order.push(orderitems);
        this.Orderchanged.emit(this.order.slice());
    }
}