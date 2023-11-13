import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadSchedulePage } from './read-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ReadSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadSchedulePageRoutingModule {}
