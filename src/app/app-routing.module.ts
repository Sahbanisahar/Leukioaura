import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { DashboardPageComponent } from './DashboardC/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FeaturesPageComponent } from './Features/features-page/features-page.component';
import { PscheduleComponent } from './Features/pschedule/pschedule.component';
import { EventscheduleComponent } from './Features/eventschedule/eventschedule.component';
import { PatientsFeatureComponent } from './Features/PatientFileView/patients-feature/patients-feature.component';
import { ConsultationDetailsComponent } from './Features/ConsultationsFeature/consultation-details/consultation-details.component';
import { DischargePrescriptionsComponent } from './Features/DischargeFeature/discharge-prescriptions/discharge-prescriptions.component';
import { DischargePrescriptionsDetailsComponent } from './Features/DischargeFeature/discharge-prescriptions-details/discharge-prescriptions-details.component';
import { ConsultationsComponent } from './Features/ConsultationsFeature/consultations/consultations.component';
import { PrescriptionsFeatureComponent } from './Features/PrescriptionsFeature/prescriptions-feature/prescriptions-feature.component';
import { PrescriptionsDetailsComponent } from './Features/PrescriptionsFeature/prescriptions-details/prescriptions-details.component';
import { AddPatientComponent } from './Doctor/add-patient/add-patient.component';
import { PatientViewComponent } from './Doctor/patient-view/patient-view.component';
import { LabInterfaceComponent } from './Laboratory/lab-interface/lab-interface.component';
import { ChatComponent } from './chat/chat.component';
import { ExtraOptions } from '@angular/router';
import { TotalStuffComponent } from './total-stuff/total-stuff.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { NewHosPatientComponent } from './new-hos-patient/new-hos-patient.component';
import { AddconsultationComponent } from './addconsultation/addconsultation.component';
import { ReleasedPatientsComponent } from './released-patients/released-patients.component';

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
  {path: 'addPatient', component: AddPatientComponent},
  {path: 'patientView', component: PatientViewComponent},
  {path: 'lab', component: LabInterfaceComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'totalstuff', component: TotalStuffComponent},
  {path: 'treatments', component: TreatmentsComponent},
  {path: 'hospatient', component: NewHosPatientComponent},
  {path: 'addconsultation', component: AddconsultationComponent},
  {path: 'releasedPatients', component: ReleasedPatientsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
