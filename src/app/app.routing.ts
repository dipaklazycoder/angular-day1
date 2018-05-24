import { Routes} from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SigupComponent } from './sigup/sigup.component';
import { SiginComponent } from './sigin/sigin.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginGuardService} from './services/login-guard-service';

export const APP_ROUTES : Routes = [
    {
        path:"pipe",
        redirectTo: 'pipe',
        pathMatch : 'full'
        
    },
    {
        path:"pipe",
        component: PipeDemoComponent,
        
    },
    {
        path:"signup",
        component: SigupComponent,
        
    },
    {
        path:"sigin",
        component: SiginComponent,
        
    },
    {
        path:"obsdemo",
        component: ObservableDemoComponent,
        canActivate : [LoginGuardService]
        
    }

]