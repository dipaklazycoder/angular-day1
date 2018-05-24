import { Routes} from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SigupComponent } from './sigup/sigup.component';
import { SiginComponent } from './sigin/sigin.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginGuardService} from './services/login-guard-service';
import { ProductComponent } from './product/product/product.component';
import { OverviewComponent } from './product/overview/overview.component';

export const APP_ROUTES : Routes = [
    
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
        
    },
    {
        path:"product",
        component: ProductComponent,
        
        
    },
    {
        path:"overview",
        component: OverviewComponent,
        
    },
    {
        path:"**",
        redirectTo: 'pipe',
        pathMatch : 'full'

    },

]