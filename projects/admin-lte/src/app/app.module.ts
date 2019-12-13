import { HomeComponent } from './home/home.component';
import { AdminLteLibraryModule } from './../../../admin-lte-library/src/lib/admin-lte-library.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AdminLteLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
