import { Routes } from '@angular/router';
import { StartComponent } from './features/start/start.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/start', pathMatch: 'full' }
];
