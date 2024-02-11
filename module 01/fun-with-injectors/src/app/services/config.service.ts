import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { }

  get url() {
    return 'http://whatever.com';
  }
}
