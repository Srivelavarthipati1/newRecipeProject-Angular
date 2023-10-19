import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "./user.model";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    user= new BehaviorSubject<User>(null);


    constructor(private http: HttpClient){}
    private serverUrl = 'http://localhost:3001/api/auth';
    
    signup(email:string, password: string){
      return  this.http.post(`${this.serverUrl}/signup`,{
            email:email,
            password:password
        })
    }
    
    logout(){
      this.user.next(null);
    }

    login(email:string, password:string){
        return  this.http.post(`${this.serverUrl}/login`,{
            email:email,
            password:password
        }).pipe(tap((response: any) => {

            if (response.token) {
              const user = new User(
                response.username,
                response.localId,
                response.token,
                new Date(response.tokenExpirationDate) // Parse expiration date from the response
    
                );
                this.user.next(user);
              localStorage.setItem('userData', JSON.stringify(user));

            }
    
          })
    
        );
    
      }
    
     
   
    
}