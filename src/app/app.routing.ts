import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { TutorialsPageComponent } from './tutorials-page/tutorials-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const APP_ROUTES: Routes = [
   
    { path:'about', component:AboutPageComponent },
    { path:'tutorials', component:TutorialsPageComponent },
    { path:'', component: PresentationPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);