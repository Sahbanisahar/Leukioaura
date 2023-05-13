import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PscheduleComponent } from './pschedule/pschedule.component';
import { EventscheduleComponent } from './eventschedule/eventschedule.component';
import { PatientFileComponent } from './patient-file/patient-file.component';
import { CarouselDynamicComponent } from './carousel-dynamic/carousel-dynamic.component';
import { PatientsFeatureComponent } from './patients-feature/patients-feature.component';
import { ConsultationDetailsComponent } from './consultation-details/consultation-details.component';
import { FormsModule } from '@angular/forms';
import { PatientFile2Component } from './patient-file2/patient-file2.component';
import { PatientFile3Component } from './patient-file3/patient-file3.component';
import { DischargePrescriptionsComponent } from './discharge-prescriptions/discharge-prescriptions.component';
import { DischargePrescriptionsDetailsComponent } from './discharge-prescriptions-details/discharge-prescriptions-details.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { PrescriptionsFeatureComponent } from './prescriptions-feature/prescriptions-feature.component';
import { PrescriptionsDetailsComponent } from './prescriptions-details/prescriptions-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
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
    PrescriptionsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
