import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import bootstrap from "bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { NavBarComponent } from './parent/nav-bar/nav-bar/nav-bar.component';
import { SigninComponent } from './parent/signin/signin.component';
import { WeatherComponent } from './parent/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavBarComponent,
    routingComponents,
    SigninComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }