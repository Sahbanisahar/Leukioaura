import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PscheduleComponent } from './pschedule/pschedule.component';
import { EventscheduleComponent } from './eventschedule/eventschedule.component';
import { PatientsFeatureComponent } from './patients-feature/patients-feature.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';
import { DischargePrescriptionsComponent } from './discharge-prescriptions/discharge-prescriptions.component';
import { DischargePrescriptionsDetailsComponent } from './discharge-prescriptions-details/discharge-prescriptions-details.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { PrescriptionsFeatureComponent } from './prescriptions-feature/prescriptions-feature.component';
import { PrescriptionsDetailsComponent } from './prescriptions-details/prescriptions-details.component';
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
  {path: 'eventsc', component: EventscheduleComponent},
  {path: 'consDet', component: ConsultationDetailsComponent},
  {path: 'dischargePres', component: DischargePrescriptionsComponent},
  {path: 'dischargePresDet', component: DischargePrescriptionsDetailsComponent},
  {path: 'consultations', component: ConsultationsComponent},
  {path: 'prescriptions', component: PrescriptionsFeatureComponent},
  {path: 'prescriptionsDet', component: PrescriptionsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
