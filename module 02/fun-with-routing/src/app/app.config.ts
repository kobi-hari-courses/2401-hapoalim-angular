import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MY_NUMBER } from './tokens/my-number.token';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: MY_NUMBER, useValue: 42},
    provideRouter(routes), 
    provideHttpClient(),     
  ]
};
