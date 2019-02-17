import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FamilyPage } from './family.page';
import { FamilyHomePage } from './home/home.page';
import { FamilyAttendancePage } from './attendance/attendance.page';
import { FamilyReportPage } from './report/report.page';
import { FamilyProfilePage } from './profile/profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: FamilyHomePage},
      {path: 'attendance', component: FamilyAttendancePage},
      {path: 'profile', component: FamilyProfilePage},
      {path: 'report', component: FamilyReportPage}
    ])
  ],
  declarations: [FamilyPage, FamilyHomePage, FamilyAttendancePage, FamilyProfilePage, FamilyReportPage],
  bootstrap: [FamilyPage],
  exports: [FamilyPage]
})
export class FamilyPageModule {}
