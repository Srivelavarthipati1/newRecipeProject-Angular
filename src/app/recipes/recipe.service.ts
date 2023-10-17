import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { DataService } from "../shared/data.service";

@Injectable()

export class RecipeService {

recipesChanged = new Subject<Recipe[]>();
private recipes:Recipe[] = []
// private recipes: Recipe[] = [
//   new Recipe(
//     'Idly-sambar',
//     'Best idly here',
//     'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wrlcwarzitxcdrtqv4ix',
//     [
//       new Ingredient('idly', 4),
//       new Ingredient('coconutchutney', 1),
//       new Ingredient('sambar', 1),
//       new Ingredient('allam-chutney', 1)
//     ],
//     // Add a unique _id for this recipe
//   ),
  
//     new Recipe(
//       'Dosa',
//     'Have a yummy dosa ',
//     'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmcl7tixfs9owmfw2f8e',
//     [
//       new Ingredient('Dosa',2),
//       new Ingredient( 'coconutchutney',1),
//       new Ingredient( 'sambar',1),
//       new Ingredient('allam-chutney',1)
//     ],
//    ),
  
//   ];


  getRecipes(){
    // this.data.FetchData().subscribe((res) => {
    //   this.recipes = res
    
    return this.recipes.slice();

  }
  setRecipes(recipes:Recipe[]){
    this.recipes= recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipe(index:number){
   
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
  constructor(private slService : ShoppingListService) { }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())

  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())
  }


}


