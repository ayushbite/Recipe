import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
 @Input() recipeitem : RecipeModel;

// @Output() RecipeSelectedPassingRecipeList = new EventEmitter<void>();

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    // this.RecipeSelectedPassingRecipeList.emit();
    this.recipeService.RecipeSelected.emit(this.recipeitem)//emiting the data we want to pass

  }



}
