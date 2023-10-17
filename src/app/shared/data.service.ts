import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs';
// import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  private serverUrl = 'http://localhost:3001/api/recipes';

  // Add a method to update or create a recipe
  updateOrCreateRecipe() {
    const recipes = this.recipeService.getRecipes();

    const url = `${this.serverUrl}`;

    // Send a PUT request with the updated recipe data
    return this.http.put(url, recipes).subscribe(response => {
              console.log(response);
            });
  }
  FetchData(){
       return this.http.get<Recipe[]>(this.serverUrl)
        .pipe(map(recipes =>{
          return recipes.map(recipe=>{
            return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]}
          })
        }),
        tap(recipes=>{
          this.recipeService.setRecipes(recipes)
        })
        )
      
      }
}



  // Add a new method to update a recipe using a PUT request
//   updateRecipe(recipe: Recipe): Observable<any> {
//     const url = `${this.serverUrl}/edit`;
//     return this.http.put(url, recipe);
//   }

// updateRecipe(updatedRecipe: Recipe) {
//     const url = `http://localhost:3001/edit`;
    
//     // Send a PUT request with the updated recipe data
//     return this.http.put(url, updatedRecipe).subscribe(response => {
//         console.log(response);
//       });
//     };
  

//   FetchData(){
//     this.http.get<Recipe[]>(this.serverUrl).subscribe(recipes=> {
//         this.recipeService.setRecipes(recipes)
//       },);
//   }

 // .pipe(map(recipes => {
        //     return recipes.map(
        //         recipes=>{

        //     });
        // }))