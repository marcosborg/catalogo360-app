import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherImagesPage } from './another-images.page';

const routes: Routes = [
  {
    path: '',
    component: AnotherImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherImagesPageRoutingModule {}
