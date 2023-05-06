import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthJSStrapi } from './auth_services/auth';
import { EFFECTS, reducers } from './store/app.state';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { AgmCoreModule } from '@agm/core';

AuthJSStrapi.init({
  server: environment.server,
  loginRoute: ['/auth', 'login'],
  homeRoute: ['/admin'],
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(EFFECTS),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbOv-a6th_b05dYyBfaTASsG7gf_BjptQ'
    })
  ],
  providers: [AuthJSStrapi.Interceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
