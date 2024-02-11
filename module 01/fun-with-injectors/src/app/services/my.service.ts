import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  x: number = 42;

  constructor() {
    console.log('My Service Created');
   }
}
