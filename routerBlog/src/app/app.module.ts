import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { RecourcesComponent } from './recources/recources.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BlogSinglePostComponent } from './blog-single-post/blog-single-post.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OpenWeatherMapComponent } from './open-weather-map/open-weather-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    RecourcesComponent,
    BlogComponent,
    BlogPostComponent,
    HomeComponent,
    MessagesComponent,
    AddPostComponent,
    BlogSinglePostComponent,
    ErrorPageComponent,
    OpenWeatherMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
