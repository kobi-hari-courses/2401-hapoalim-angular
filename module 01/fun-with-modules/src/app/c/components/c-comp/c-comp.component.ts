import { Component, inject } from '@angular/core';
import { MY_NUMBER } from '../../../my-number.token';

@Component({
  selector: 'app-c-comp',
  templateUrl: './c-comp.component.html',
  styleUrl: './c-comp.component.css'
})
export class CCompComponent {
  readonly myNumber = inject(MY_NUMBER);

}
