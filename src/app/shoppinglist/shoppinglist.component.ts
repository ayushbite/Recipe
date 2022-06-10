import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  // ingredient : IngredientModel[] = [
  //   new IngredientModel("dal", 20),
  //   new IngredientModel("tomato", 20),
  // ];

  ingredient: IngredientModel[];

  constructor(private ShoppingListService: ShoppingListService) { }


  // ShoppingEventPush(ingredientitem:IngredientModel){
  //   this.ingredient.push(ingredientitem);
  // }

  ngOnInit(): void {
    this.ingredient = this.ShoppingListService.getIngredients();
    this.ShoppingListService.IngredientsChanged.subscribe(
      (Ingredients: IngredientModel[]) => {
        this.ingredient = Ingredients;

      }
    );
  }

}
