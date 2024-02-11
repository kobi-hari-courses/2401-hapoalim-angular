import { NgModule } from "@angular/core";
import { MY_NUMBER } from "../my-number.token";
import { CCompComponent } from './components/c-comp/c-comp.component';

@NgModule({
    providers: [
        {provide: MY_NUMBER, useValue: 60}
    ],
    declarations: [
      CCompComponent
    ], 
    exports: [
        CCompComponent
    ]
})
export class CModule {

}