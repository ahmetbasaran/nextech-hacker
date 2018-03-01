import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

// import custom components


const routes: Routes = [
  // Routes go here. Specific Guards will go here to validate user role.
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

// Routed Components get imported and exported here.
// Use --skip-import if using ng g c command so it doesn't get added to the main module for this folder.
export const MainRoutedComponents = [
    HomeComponent
];
