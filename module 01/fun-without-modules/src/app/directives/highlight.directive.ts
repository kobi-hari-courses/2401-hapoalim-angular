import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.background-color')
  bg: string = 'yellow';

  constructor() { }

}
