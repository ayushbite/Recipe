import { EventEmitter } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";

export class ShoppingListService{
    IngredientsChanged = new EventEmitter<IngredientModel[]>(); //this will emit a array of ingredient
  private  ingredient : IngredientModel[] = [
        new IngredientModel("dal", 20),
        new IngredientModel("tomato", 20),
      ];

      getIngredients(){
          return this.ingredient.slice();
      }

      addIngredient(ingredient:IngredientModel){
          this.ingredient.push(ingredient);
          this.IngredientsChanged.emit(this.ingredient.slice())
      }

      addIngredientsFromRecipeDetails(ingredients:IngredientModel[]){
        //   for(let ing of ingredient){
        //       this.addIngredient(ing);
        // or
            this.ingredient.push(...ingredients);
            this.IngredientsChanged.emit(this.ingredient.slice())



          }

      
    
}