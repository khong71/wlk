import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
        path: '', component: MainComponent,
            children:[
                // {path: '', loadComponent: () => import('./main/home/home.component').then(x => x.HomeComponent)},
                // {path: 'about', loadComponent: () => import('./main/about/about.component').then(x => x.AboutComponent)},
            ]
    },
    {
        path: '**', component: MainComponent,
    },
];
