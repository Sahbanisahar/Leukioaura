import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './Home/about/about.component';
import { DashboardComponent } from './DashboardC/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { DashboardPageComponent } from './DashboardC/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesPageComponent } from './Features/features-page/features-page.component';
import { BlogsComponent } from './Home/blogs/blogs.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { PscheduleComponent } from './Features/pschedule/pschedule.component';
import { EventscheduleComponent } from './Features/eventschedule/eventschedule.component';
import { PatientFileComponent } from './Features/PatientFileView/patient-file/patient-file.component';
import { CarouselDynamicComponent } from './carousel-dynamic/carousel-dynamic.component';
import { PatientsFeatureComponent } from './Features/PatientFileView/patients-feature/patients-feature.component';
import { ConsultationDetailsComponent } from './Features/ConsultationsFeature/consultation-details/consultation-details.component';
import { FormsModule } from '@angular/forms';
import { PatientFile2Component } from './Features/PatientFileView/patient-file2/patient-file2.component';
import { PatientFile3Component } from './Features/PatientFileView/patient-file3/patient-file3.component';
import { DischargePrescriptionsComponent } from './Features/DischargeFeature/discharge-prescriptions/discharge-prescriptions.component';
import { DischargePrescriptionsDetailsComponent } from './Features/DischargeFeature/discharge-prescriptions-details/discharge-prescriptions-details.component';
import { ConsultationsComponent } from './Features/ConsultationsFeature/consultations/consultations.component';
import { PrescriptionsFeatureComponent } from './Features/PrescriptionsFeature/prescriptions-feature/prescriptions-feature.component';
import { PrescriptionsDetailsComponent } from './Features/PrescriptionsFeature/prescriptions-details/prescriptions-details.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { AddPatientComponent } from './Doctor/add-patient/add-patient.component';
import { PatientViewComponent } from './Doctor/patient-view/patient-view.component';
import { LabInterfaceComponent } from './Laboratory/lab-interface/lab-interface.component';
import { TestRequestComponent } from './test-request/test-request.component';
import { ChatComponent } from './chat/chat.component';
import { TotalStuffComponent } from './total-stuff/total-stuff.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { NewHosPatientComponent } from './new-hos-patient/new-hos-patient.component';
import { AddconsultationComponent } from './addconsultation/addconsultation.component';
import { ReleasedPatientsComponent } from './released-patients/released-patients.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientInterfaceComponent } from './Patient/patient-interface/patient-interface.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DynamicCalendarComponent } from './dynamic-calendar/dynamic-calendar.component';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    DashboardComponent,
    HomePageComponent,
    DashboardPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    FooterComponent,
    FeaturesPageComponent,
    BlogsComponent,
    ContactUsComponent,
    PscheduleComponent,
    EventscheduleComponent,
    PatientFileComponent,
    CarouselDynamicComponent,
    PatientsFeatureComponent,
    ConsultationDetailsComponent,
    PatientFile2Component,
    PatientFile3Component,
    DischargePrescriptionsComponent,
    DischargePrescriptionsDetailsComponent,
    ConsultationsComponent,
    PrescriptionsFeatureComponent,
    PrescriptionsDetailsComponent,
    CarouselHomeComponent,
    AddPatientComponent,
    PatientViewComponent,
    LabInterfaceComponent,
    TestRequestComponent,
    ChatComponent,
    TotalStuffComponent,
    TreatmentsComponent,
    NewHosPatientComponent,
    AddconsultationComponent,
    ReleasedPatientsComponent,
    ProfileComponent,
    PatientInterfaceComponent,
    DynamicCalendarComponent,
    MultiChartComponent,
    CanvasJSChart,
    PieGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { 

}
