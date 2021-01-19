import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';
import { PaymentsComponent } from './payments/payments.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';

//import { AddFlightComponent } from './admin/add-flight/add-flight.component';
// import { DeleteFlightComponent } from './admin/delete-flight/delete-flight.component';
// import { ModifyFlightComponent } from './admin/modify-flight/modify-flight.component';
// import { ReportGenerateComponent } from './admin/report-generate/report-generate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HomeComponent,
    SeatSelectComponent,
    PaymentsComponent,
    MyBookingsComponent,
    AddFlightComponent,
    DeleteFlightComponent,
    DashboardComponent,
    LoggedOutComponent,
    WelcomeComponent,
    ScheduleComponent,
    // //AddFlightComponent,
    // DeleteFlightComponent,
    // ModifyFlightComponent,
    // ReportGenerateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
