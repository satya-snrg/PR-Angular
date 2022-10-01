import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
// const routes: Routes = []; // sets up routes constant where you define your routes
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'users', component: UsersListComponent},
    { path: 'admin-home', component: AdminDashboardComponent},
    { path: 'guest-home', component: GuestDashboardComponent},
    { path: 'logout', component: LogoutComponent},

  ];


// configures NgModule imports and exports
@NgModule({
  declarations: [ 
   
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }