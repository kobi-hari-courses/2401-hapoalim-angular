import { Routes } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'page-a'}, 
    {path: 'page-a', component: PageAComponent},
    {path: 'page-b', component: PageBComponent},
    {path: 'page-c', component: PageCComponent},
];
