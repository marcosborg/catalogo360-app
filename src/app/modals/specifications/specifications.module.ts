import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificationsPageRoutingModule } from './specifications-routing.module';

import { SpecificationsPage } from './specifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificationsPageRoutingModule
  ],
  declarations: [SpecificationsPage]
})
export class SpecificationsPageModule {}
