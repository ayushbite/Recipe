import { IngredientModel } from "../shared/ingredient.model";

export class RecipeModel{
    public name:String;
    public description : String;
    public imagePath : String;
    public Ingredients : IngredientModel[];
    constructor( name: string,description :String,imagePath:String ,ingredient : IngredientModel[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.Ingredients = ingredient;

    }
}