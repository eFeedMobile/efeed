import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { HomepublicComponent } from './homepublic/homepublic.component';

const routes: Routes = [
  {path: '', redirectTo: '/HomePublic', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'homepublic', component: HomepublicComponent},
  {
    path: 'home', component: HomepageComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageErrorComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
