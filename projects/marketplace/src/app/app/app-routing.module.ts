import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'welcome-from-angular',
    loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
