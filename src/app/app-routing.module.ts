import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {TodolistComponent} from "./todolist/todolist.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {FilterComponent} from "./filter/filter.component";
import {DirectiveComponent} from "./directive/directive.component";
import {LocaleComponent} from "./locale/locale.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodolistComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
