import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MY_NUMBER } from "../my-number.token";
import { CModule } from "../c/c.module";

@NgModule({
    declarations: [], 
    imports: [
        CommonModule, 
        CModule
    ], 
    exports: [
        CModule
    ],
    providers: [
        { provide: MY_NUMBER, useValue: 50}
    ]
})
export class BModule {}