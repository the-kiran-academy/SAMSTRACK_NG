import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/view-all-attendance/view-all-attendance.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'faculty-dashboard',
    component: FacultyDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-user',
    component: AllUsersComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'edit-user/:username',
    component: EditUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-subject',
    component: AllSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-subject/:subjectid',
    component: EditSubjectComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'view-all-attendance',
    component: ViewAllAttendanceComponent,
    canActivate:[AuthGuard]
  },

  /* faculty routes */
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'all-students',
    component: AllStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'take-attendance',
    component: TakeAttendanceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view-attendance',
    component:ViewAttendanceComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
