import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { SpecificationsPageModule } from '../../modals/specifications/specifications.module';
import { DiferentSpecificationsPageModule } from '../../modals/diferent-specifications/diferent-specifications.module';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    SpecificationsPageModule,
    DiferentSpecificationsPageModule
  ],
  declarations: [ProductPage],
  providers: [InAppBrowser, SocialSharing]
})
export class ProductPageModule { }
