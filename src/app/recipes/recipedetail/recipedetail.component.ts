import { Component, OnInit,Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  @Input() RecipeBind:RecipeModel;

  constructor( private RecipeService : RecipeService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.RecipeService.addIngredientsToShoppingList(this.RecipeBind.Ingredients)

  }

}
