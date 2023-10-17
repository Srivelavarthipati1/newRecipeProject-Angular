// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { DataService } from 'src/app/shared/data.service';

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit, OnDestroy {
//   recipes: Recipe[] = [];
//   subscription: Subscription;

//   constructor(
//     private recipeService: RecipeService,
//     private router: Router,
//     private data: DataService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit() {
//     this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
//       this.recipes = recipes;
//     });

//     // Fetch recipes from the data service
//   //   this.data.FetchData().subscribe((fetchedRecipes: Recipe[]) => {
//   //     // Combine the fetched recipes with the ones from RecipeService
//   //     this.recipes = this.recipes.concat(fetchedRecipes);
//   //   });
//   // }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();
//   }

//   onNewRecipe() {
//     this.router.navigate(['new'], { relativeTo: this.route });
//   }
// }

// }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}









// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { DataService } from 'src/app/shared/data.service';


// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit,OnDestroy {

// recipes:any;
// subscription : Subscription;

// constructor(private recipeService: RecipeService,
//             private router:Router,
//             private data: DataService,
//             private route: ActivatedRoute){}

//   ngOnInit(){
//   //  this.subscription = this.recipeService.recipesChanged.
//   //   subscribe(
//   //     (recipes:Recipe[])=>{
//   //       console.log(recipes,'reee')
//   //       this.recipes=recipes;
//   //     }
//   //   )
//       //  this.recipes = this.fetchData();
//   this.subscription =this.data.FetchData().subscribe((res => {
//     console.log(res,'ee');
//     this.recipes = res;
    
//     this.recipes = this.recipeService.getRecipes();
//   }))
// }
// ngOnDestroy(): void {
//     this.subscription.unsubscribe();
// }

//   onNewRecipe(){
//     this.router.navigate(['new'],{relativeTo:this.route});
//   }
  // fetchData() {
  //   this.data.FetchData().subscribe((res => {
  //     console.log(res, 'rrrr')
  // this.router.navigate(['recipes'])
  // return this.recipes = res;
  //   }))
  // }

// }






