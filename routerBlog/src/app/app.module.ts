import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { RecourcesComponent } from './recources/recources.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DocsComponent,
    RecourcesComponent,
    BlogComponent,
    BlogPostComponent,
    HomeComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
