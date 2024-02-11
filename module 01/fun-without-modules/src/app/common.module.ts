import { NgModule } from "@angular/core";
import { CrazyButtonComponent } from "./components/crazy-button/crazy-button.component";
import { CoolImageDirective } from "./directives/cool-image.directive";
import { MyLinkDirective } from "./directives/my-link.directive";

@NgModule({
    imports: [
        CrazyButtonComponent, 
        CoolImageDirective, 
        MyLinkDirective, 
    ], 
    exports: [
        CrazyButtonComponent, 
        CoolImageDirective, 
        MyLinkDirective
    ]
})
export class MyCommonModule {}