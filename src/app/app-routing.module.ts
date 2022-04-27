import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {FilterComponent} from "./components/filter/filter.component";
import {DirectiveComponent} from "./components/directive/directive.component";
import {LocaleComponent} from "./components/locale/locale.component";
import {CustomPipeComponent} from "./components/custom-pipe/custom-pipe.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodolistComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
