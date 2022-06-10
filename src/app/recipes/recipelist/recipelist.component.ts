import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes : RecipeModel[]
 
  constructor(private RecipeService:RecipeService) { }

//  @Output() RecipeEmitforRecipeDetails = new EventEmitter<RecipeModel>();


  // WheneverRecipeSelected(recipedata:RecipeModel){
  //   this.RecipeEmitforRecipeDetails.emit(recipedata);
    

  // }

  ngOnInit(): void {
//adding recipe serices to the recipe
this.recipes = this.RecipeService.getRecipe();

  }

}
