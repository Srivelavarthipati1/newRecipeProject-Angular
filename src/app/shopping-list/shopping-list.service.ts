import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  IngredientsChanged = new Subject<Ingredient[]>();
  
  ingredients: Ingredient[] =[
    new Ingredient('apples',5),
    new Ingredient('tomatoes',6)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.IngredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.next(this.ingredients.slice())
  
  }
  constructor() { }
}
