import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators'; // Import operators
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  private serverUrl = 'http://localhost:3001/api/recipes';

  updateOrCreateRecipe() {
    const recipes = this.recipeService.getRecipes();

    const url = `${this.serverUrl}`;

    // Send a PUT request with the updated recipe data
    return this.http.put(url, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  FetchData() {
   
        return this.http.get<Recipe[]>
        (this.serverUrl).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
