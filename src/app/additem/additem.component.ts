import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shoppinglist.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent  {

  constructor(private shopping:ShoppingService) { }

  item:string;

  // add item logic
  add() {
    this.shopping.addItem(this.item,JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    console.log(this.item);
    this.item = "";

  }
}
