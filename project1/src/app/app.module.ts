import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { MainListComponent } from './main/list/main.list.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NamesComponent } from './names/names.component';

@NgModule({
  declarations: [
    AppComponent, HeadComponent, MainComponent, MainListComponent, FooterComponent, FormComponent, NamesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
