import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadSchedulePageRoutingModule } from './read-schedule-routing.module';

import { ReadSchedulePage } from './read-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadSchedulePageRoutingModule
  ],
  declarations: [ReadSchedulePage]
})
export class ReadSchedulePageModule {}
