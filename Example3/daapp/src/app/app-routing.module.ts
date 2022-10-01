import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// const routes: Routes = []; // sets up routes constant where you define your routes

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent}
  ];


// configures NgModule imports and exports
@NgModule({
  declarations: [ 
   
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }