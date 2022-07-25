import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { galleryReducer } from './store/gallery.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({gallery: galleryReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
