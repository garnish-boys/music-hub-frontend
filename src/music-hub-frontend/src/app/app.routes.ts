import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    { title: 'Home', path: 'home', component: HomeComponent },
    { title: 'About', path: 'about', component: AboutComponent },
    { title: 'Registration', path: 'registration', component: RegistrationComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];