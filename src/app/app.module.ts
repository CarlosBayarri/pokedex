import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducers } from './app.reducer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DirectivesModule } from './shared/directives/directives.module';
import { HttpModInterceptor } from './shared/interceptors/http-mod.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    DirectivesModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpModInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
