import { Injectable, InjectionToken } from "@angular/core";

export interface User {
  name: string;
  salutation : () => string
}

export class Greeter implements  User{
  name: string;
  age : number = 2

  constructor(){
    console.log('Greeter')
  }
  public salutation(): string{
    return "TEST";
  }

}

export const GREETER = new InjectionToken('Greeter', {
  providedIn: 'root',
  factory: () => Greeter
})

@Injectable({
  providedIn: "root"
})
export class SomethingService {
  street: string
}
