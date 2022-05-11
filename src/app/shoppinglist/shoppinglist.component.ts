import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  ingredient : IngredientModel[] = [
    new IngredientModel("dal", 20),
    new IngredientModel("tomato", 20),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
