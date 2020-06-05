
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDetailsViewComponent } from './country-details-view/country-details-view.component';
import { MaterialModule } from './material.module';
import { CommonDropdownComponent } from './common-dropdown/common-dropdown.component';
import {HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsViewComponent,
    CommonDropdownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ countryDetails: CustomerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }