import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthoriseComponent } from "./authorise/authorise.component";
import { SignUpComponent } from "./authorise/sign-up/sign-up.component";
import { LogInComponent } from "./authorise/log-in/log-in.component";

const routes: Routes = [
  {
    path: '',
    component: AuthoriseComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'log-in',
        component: LogInComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/sign-up',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/sign-up',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
