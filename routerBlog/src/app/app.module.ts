import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { RecourcesComponent } from './recources/recources.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OpenWeatherMapComponent } from './open-weather-map/open-weather-map.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageReactComponent } from './login-page-react/login-page-react.component';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    RecourcesComponent,
    HomeComponent,
    MessagesComponent,
    ErrorPageComponent,
    OpenWeatherMapComponent,
    LoginPageComponent,
    LoginPageReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
