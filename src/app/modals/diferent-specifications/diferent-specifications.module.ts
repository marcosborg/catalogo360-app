import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiferentSpecificationsPageRoutingModule } from './diferent-specifications-routing.module';

import { DiferentSpecificationsPage } from './diferent-specifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiferentSpecificationsPageRoutingModule
  ],
  declarations: [DiferentSpecificationsPage]
})
export class DiferentSpecificationsPageModule {}
