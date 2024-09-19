import { Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';

export const routes: Routes = [
    { path: 'start', component: StartPageComponent },
    { path: '', redirectTo: '/start', pathMatch: 'full' }
];
