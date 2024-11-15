import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    {path:"",redirectTo:"welcome",pathMatch:'full'},
    {path:"welcome",component:WelcomeComponent}
];
