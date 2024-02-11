import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true
})
export class CoolImageDirective {

  @HostBinding('attr.title')
  @Input('src')
  tooltip!: string;


  constructor() { }

}
