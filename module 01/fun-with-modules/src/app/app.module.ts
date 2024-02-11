import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MY_NUMBER } from './my-number.token';
import { BModule } from './b/b.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BModule
  ],
  providers: [
    {provide: MY_NUMBER, useValue: 42 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
