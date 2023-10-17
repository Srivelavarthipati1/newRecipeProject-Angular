import { Component} from "@angular/core";
import { DataService } from "../shared/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipes/recipe.model";
@Component({
    selector : 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataService, private route:ActivatedRoute, private ro: Router){}
    onSaveData() {
        this.dataStorageService.updateOrCreateRecipe()
      }
      ngOnInit() {
        // this.onFetchData();
       
       }    
    
      
onFetchData(){
    this.dataStorageService.FetchData().subscribe()
    
 }
}
