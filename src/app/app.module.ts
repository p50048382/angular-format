import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page.component';

@NgModule({
  declarations: [
    AppComponent,
	PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
	//RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
