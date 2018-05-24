import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { UserService } from './services/user-service';
import{HttpModule} from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { LoggerInterceptor } from './services/logger-interceptor';
import {RouterModule} from '@angular/router'
import { APP_ROUTES } from './app.routing';
import { LoginGuardService } from './services/login-guard-service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    PipeDemoComponent,
    FilterPipe,
    SiginComponent,
    SigupComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [UserService,LoginGuardService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggerInterceptor,
    multi:true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
