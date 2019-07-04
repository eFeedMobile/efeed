import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AuthGuard } from './auth.guard';
import { MpageComponent } from './mpage/mpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/mobile', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'mobile', component: MpageComponent,
    //canActivate: [AuthGuard] 
    // hiden
  },
  { path: '**', component: PageErrorComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
