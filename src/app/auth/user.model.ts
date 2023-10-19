export class User{
    constructor(public email:string,
        public id: string,
        private _token:string,
        private _tokenExpirationDate: Date){}

//getter is a special type of property that executes when u try to access the property
    get token(){
        if(!this._tokenExpirationDate || new Date()> this._tokenExpirationDate)
           {return null;} 
        return this._token;
    }


}