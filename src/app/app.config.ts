import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { navFeature } from './features/nav/store/nav.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(),
    provideState(navFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
