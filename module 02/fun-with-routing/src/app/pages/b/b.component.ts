import { Component, inject } from '@angular/core';
import { MY_NUMBER } from '../../tokens/my-number.token';
import { StamComponent } from "../../components/stam/stam.component";

@Component({
    selector: 'app-b',
    standalone: true,
    templateUrl: './b.component.html',
    styleUrl: './b.component.css',
    imports: [StamComponent]
})
export class BComponent {
  num = inject(MY_NUMBER);

}
