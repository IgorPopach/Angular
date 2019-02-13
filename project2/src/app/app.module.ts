import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockItemComponent } from './block-item/block-item.component';
import { BlogInputComponent } from './blog-input/blog-input.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginListComponent } from './login-list/login-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    BlockListComponent,
    BlockItemComponent,
    BlogInputComponent,
    AddPostComponent,
    AuthComponent,
    LoginFormComponent,
    LoginListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
