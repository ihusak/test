import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import {SearchService} from "./search/services/search.service";
import {AppService} from "./app.service";
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
      HttpModule
  ],
  providers: [
      SearchService,
      AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
