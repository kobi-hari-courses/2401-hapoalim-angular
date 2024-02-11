import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c.component.html',
  styleUrl: './c.component.css'
})
export class CComponent {
  @Input({required: true})
  id!: string;

  // route = inject(ActivatedRoute);

  // id$ = this.route.params.pipe(
  //   map(prm => prm['id'] as string)
  // )

}
