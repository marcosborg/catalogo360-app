import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotherImagesPageRoutingModule } from './another-images-routing.module';

import { AnotherImagesPage } from './another-images.page';
import { SpecificationsPageModule } from '../../modals/specifications/specifications.module';
import { DiferentSpecificationsPageModule } from '../../modals/diferent-specifications/diferent-specifications.module';

import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherImagesPageRoutingModule,
    SpecificationsPageModule,
    DiferentSpecificationsPageModule
  ],
  declarations: [AnotherImagesPage],
  providers: [SocialSharing, InAppBrowser]
})
export class AnotherImagesPageModule { }
