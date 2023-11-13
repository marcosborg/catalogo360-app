import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObsPage } from './obs.page';

const routes: Routes = [
  {
    path: '',
    component: ObsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObsPageRoutingModule {}
