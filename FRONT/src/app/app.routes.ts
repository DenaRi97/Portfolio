import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent 
    },

    // {
    //     path: 'skills',
    //     component: SkillsComponent
    // },

    // {
    //     path: 'work',
    //     component: WorkComponent
    // },

    // {
    //     path: 'contact',
    //     component: ContactComponent
    // },
    
];
