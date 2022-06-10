import { EventEmitter, Injectable } from "@angular/core";
import { IngredientModel } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist/shoppinglist.service";
import { RecipeModel } from "./recipe.model";
@Injectable()
export class RecipeService {

  

    RecipeSelected = new EventEmitter<RecipeModel>();

   

    private recipes: RecipeModel[] = [
        new RecipeModel("pizza", "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese",
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg", [new IngredientModel('cheese', 20), new IngredientModel('wheat', 21)]),
        new RecipeModel("pizza", "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese",
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg", []),
    ];
    constructor( private slService : ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }
    

    addIngredientsToShoppingList(ingredient : IngredientModel[]){
    //    this.Shopp
    this.slService.addIngredientsFromRecipeDetails(ingredient);

    }

}