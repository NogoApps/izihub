import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { TutorialsPageComponent } from './tutorials-page/tutorials-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NewTutorialComponent } from './new-tutorial/new-tutorial.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
   
    { path:'login', component:LoginComponent },
    { path:'about', component:AboutPageComponent },
    { path:'new', component:NewTutorialComponent },
    { path:'tutorials', component:TutorialsPageComponent },
    { path:'', component: PresentationPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);