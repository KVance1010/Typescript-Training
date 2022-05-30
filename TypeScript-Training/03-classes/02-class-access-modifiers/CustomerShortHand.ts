class CustomerShortHand{
  
    constructor(private _firstName: string, private _lastName: string){ }

    public get firstName():string{
        return this._firstName;
    }
    get lastName():string{
        return this._lastName;
    }
    // the default is public
    set firstName(value:string){
        this._firstName = value;
    }
    public set lastName(value:string){
        this._lastName = value;
    }
}

// create an instance
let myCustomer = new CustomerShortHand("Kyle", "Vance");

myCustomer.firstName = "John";

console.log('Hello ' + myCustomer.firstName);
console.log(myCustomer.lastName);
