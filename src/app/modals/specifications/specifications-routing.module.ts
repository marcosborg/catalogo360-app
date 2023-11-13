import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificationsPage } from './specifications.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificationsPageRoutingModule {}
