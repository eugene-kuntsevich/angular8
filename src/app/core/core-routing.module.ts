import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from 'src/app/features/login/login.component';
import {DogComponent} from "../features/dog/dog.component";
import {HomeComponent} from "../features/home/home.component";
import {HumanComponent} from "../features/human/human.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'dog',
        pathMatch: 'full',
        component: DogComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'human',
        pathMatch: 'full',
        component: HumanComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule {

}
