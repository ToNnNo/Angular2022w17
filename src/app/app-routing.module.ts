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
import {FormulaireComponent} from "./components/formulaire/formulaire.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ServiceComponent} from "./components/service/service.component";
import {ObservableComponent} from "./components/observable/observable.component";
import {ParametersComponent} from "./components/parameters/parameters.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {SecureRouteGuard} from "./guards/secure-route.guard";
import {HttpComponent} from "./components/http/http.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodolistComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'inscription', component: SignupComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'parameters', component: ParametersComponent },
  {
    path: 'parameters/:name',
    component: ParametersComponent,
    canActivate: ['SecureRoute', SecureRouteGuard]
  },
  { path: 'authentification', component: AuthenticationComponent },
  { path: 'http', component: HttpComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
