import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // lazy load the users module
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
    }
];
