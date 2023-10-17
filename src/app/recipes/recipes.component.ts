import { Component,ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  //now we can access this recipeService in other child classes too.
})
export class RecipesComponent implements OnInit {
  
  constructor(private data: DataService){

  }
  recipes: any;
  
  ngOnInit(){
    
  }

}
