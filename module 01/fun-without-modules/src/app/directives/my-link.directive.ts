import { Directive, InjectionToken, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export const LINK_ACTIVE_CLASS = new InjectionToken<string>('LINK_ACTIVE_CLASS');

@Directive({
  selector: '[myLink]',
  standalone: true, 
  hostDirectives: [
    RouterLinkActive, 
    {
      directive: RouterLink, 
      inputs: [
        'routerLink: myLink'
      ]
    }
  ]
})
export class MyLinkDirective {
  readonly rla = inject(RouterLinkActive);
  readonly className = inject(LINK_ACTIVE_CLASS, {
    optional: true
  })

  constructor() {
    this.rla.routerLinkActive = this.className ?? 'here';
  }

}
