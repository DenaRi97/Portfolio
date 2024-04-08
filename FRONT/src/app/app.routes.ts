import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent 
    },
    // {
    //     path: 'works',
    //     component: ,
    // },
];
