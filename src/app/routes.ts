/**
 * Defines all routing for the application.
 *
 * @module AppModule
 */ /** */
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { WelcomeComponent } from './pages/pages.barrel';

/**
 * Route mapping for the application.
 */
export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    }
];

/**
 * The module that wraps all the routing.
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
