import { Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HubPageComponent } from './pages/hub-page/hub-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

export const routes: Routes = [
    { path: 'start', component: StartPageComponent },
    { path: 'hub', component: HubPageComponent },
    { path: 'auth', component: AuthPageComponent },
    { path: '', redirectTo: '/start', pathMatch: 'full' }
];
