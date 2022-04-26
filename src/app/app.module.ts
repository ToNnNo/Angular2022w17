import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import fr from '@angular/common/locales/fr';
import de from '@angular/common/locales/de';
import ja from '@angular/common/locales/ja';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilterComponent } from './filter/filter.component';
import { DirectiveComponent } from './directive/directive.component';
import { LocaleComponent } from './locale/locale.component';

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
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
