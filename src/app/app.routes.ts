import { Routes } from '@angular/router';
import { StartComponent } from './features/start/start.component';

export const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: '', redirectTo: '/start', pathMatch: 'full' }
];
