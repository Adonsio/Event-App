import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent} from "./event-list/event-list.component";
import { LoginComponent} from "./login/login.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import {ShowEventComponent} from "./show-event/show-event.component";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'event/create', component: CreateEventComponent},
  {path: 'event/:id/edit', component: EditEventComponent },
  {path: 'event/:id', component: ShowEventComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
