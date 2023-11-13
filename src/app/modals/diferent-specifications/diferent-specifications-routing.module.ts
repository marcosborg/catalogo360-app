import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiferentSpecificationsPage } from './diferent-specifications.page';

const routes: Routes = [
  {
    path: '',
    component: DiferentSpecificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiferentSpecificationsPageRoutingModule {}
