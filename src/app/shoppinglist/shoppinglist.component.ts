import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent  {

  constructor(public shopping:ShoppingService) { }

}
