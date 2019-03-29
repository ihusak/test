import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import {SearchService} from "./search/services/search.service";
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule
  ],
  providers: [
      SearchService,
      AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
