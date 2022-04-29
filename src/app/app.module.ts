import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { registerLocaleData } from "@angular/common";
import fr from '@angular/common/locales/fr';
import de from '@angular/common/locales/de';
import ja from '@angular/common/locales/ja';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FilterComponent } from './components/filter/filter.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { PipelindromePipe } from './pipes/pipelindrome/pipelindrome.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { SignupComponent } from './components/signup/signup.component';
import { DefaultImagePipe } from './pipes/defaultImage/default-image.pipe';
import { ServiceComponent } from './components/service/service.component';
import { ObservableComponent } from './components/observable/observable.component';
import { HeaderComponent } from './components/header/header.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HttpComponent } from './components/http/http.component';
import { AddressComponent } from './components/address/address.component';
import {AuthenticationInterceptor} from "./interceptors/authentication.interceptor";


registerLocaleData(fr);
registerLocaleData(de);
registerLocaleData(ja);

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodolistComponent,
    HomeComponent,
    NotfoundComponent,
    FilterComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomPipeComponent,
    PipelindromePipe,
    SortPipe,
    FormulaireComponent,
    SignupComponent,
    DefaultImagePipe,
    ServiceComponent,
    ObservableComponent,
    HeaderComponent,
    ParametersComponent,
    AuthenticationComponent,
    HttpComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: 'SecureRoute', useValue: () => true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
