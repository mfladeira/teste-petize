import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsPersonComponent } from './pages/details-person/details-person.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsPersonComponent
    }
];
