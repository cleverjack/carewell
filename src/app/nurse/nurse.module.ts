import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { NursePage } from './nurse.page';
import { NurseHomePage } from './home/home.page';
import { NurseAttendancePage } from './attendance/attendance.page';
import { NurseProfilePage } from './profile/profile.page';
import { NurseSchedulePage } from './schedule/schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: NurseHomePage},
      {path: 'attendance', component: NurseAttendancePage},
      {path: 'profile', component: NurseProfilePage},
      {path: 'schedule', component: NurseSchedulePage}
    ])
  ],
  declarations: [NursePage, NurseHomePage, NurseAttendancePage, NurseProfilePage, NurseSchedulePage],
  bootstrap: [NursePage],
  exports: [NursePage]
})
export class NursePageModule {}
