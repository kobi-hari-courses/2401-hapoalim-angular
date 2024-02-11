import { Routes } from '@angular/router';
import { CComponent } from './pages/c/c.component';
import { BComponent } from './pages/b/b.component';
import { MY_NUMBER } from './tokens/my-number.token';
import { ENVIRONMENT_INITIALIZER } from '@angular/core';

export const routes: Routes = [
  {
    path: 'a',
    loadComponent: () => import('./pages/a/a.component'),
    providers: [{ provide: MY_NUMBER, useValue: 52 }],
  },
  { path: 'b', component: BComponent },
  {
    path: 'c',
    component: CComponent,
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        useValue: () => console.log('Hey, I am visiting C for the first time'),
        multi: true
      },
    ],
  },
];
