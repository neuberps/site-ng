import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
<<<<<<< Updated upstream
=======
import { provideHttpClient } from '@angular/common/http';
>>>>>>> Stashed changes
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< Updated upstream
  providers: [provideRouter(routes), provideClientHydration()]
=======
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]
>>>>>>> Stashed changes
};
