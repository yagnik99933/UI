import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { PaymentsComponent } from './payments/payments.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/register', component: RegisterComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/search', component: SearchComponent },
  { path: 'seat', component: SeatSelectComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'dashboard/mybookings', component: MyBookingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/search', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'dashboard/logout', component: LoggedOutComponent },
  { path: 'dashboard/logout/search', component: SearchComponent },
  { path: 'dashboard/logout/login', component: LoginComponent },
  { path: 'dashboard/logout/register', component: RegisterComponent },

  { path: 'home/admin', component: AdminHomeComponent },
  { path: 'home/admin/addflight', component: AddFlightComponent },
  { path: 'home/admin/scheduleflight', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
