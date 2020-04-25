import { Routes, RouterModule } from '@angular/router';

import { CreateEmployee } from './create-employee';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: CreateEmployee, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to employee
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);