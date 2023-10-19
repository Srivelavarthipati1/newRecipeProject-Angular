import { Component} from "@angular/core";
import { DataService } from "../shared/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";


@Component({
    selector : 'app-header',
    templateUrl: './header.component.html'
})


export class HeaderComponent {

    isAuthenticated = false;
    private userSub : Subscription;

    constructor(private dataStorageService: DataService,
         private authService: AuthService,
        private route:ActivatedRoute, private ro: Router){}


    onSaveData() {
        this.dataStorageService.updateOrCreateRecipe()
      }

    onLogout(){
        this.authService.logout()
    }
    
      ngOnInit() {
      this.userSub = this.authService.user.subscribe(user=>{
        this.isAuthenticated = !!user;
      })
       
       }  
       
       ngOnDestroy(){
        this.userSub.unsubscribe()
       }
    
      
onFetchData(){
    this.dataStorageService.FetchData().subscribe(res=>{
        console.log(res,"hellooooooooo")
    })
    
 }
}
