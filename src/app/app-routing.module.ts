import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PscheduleComponent } from './pschedule/pschedule.component';
import { PatientsFeatureComponent } from './patients-feature/patients-feature.component';
import { ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'features', component: FeaturesPageComponent},
  {path: 'pschedule', component: PscheduleComponent},
  {path: 'patients', component: PatientsFeatureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
