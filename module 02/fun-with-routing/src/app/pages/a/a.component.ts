import { Component, inject } from '@angular/core';
import { MY_NUMBER } from '../../tokens/my-number.token';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [NgIf],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export default class AComponent {
  a = inject(MY_NUMBER);


}