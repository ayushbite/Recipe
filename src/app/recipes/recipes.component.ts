import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  EmitedRecipeSaveForRecipeDetails :RecipeModel

  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.RecipeService.RecipeSelected.subscribe(
      (recipe:RecipeModel) => {
        this.EmitedRecipeSaveForRecipeDetails = recipe;

      }
    );
  }

}
