import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockItemComponent } from './block-item/block-item.component';
import { BlogInputComponent } from './blog-input/blog-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    BlockListComponent,
    BlockItemComponent,
    BlogInputComponent
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
