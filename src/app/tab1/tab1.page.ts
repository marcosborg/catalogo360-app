import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { LanguageService } from '../services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public alertController: AlertController,
    public router: Router,
    private iab: InAppBrowser,
    public languageService: LanguageService
  ) { }

  user: any = [];
  language: string;
  translation: any = [];

  ngOnInit() {
    this.getUser();
    this.getLanguage();
  }

  async getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getPage1(this.language);
    });
  }

  async getUser() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp['value']);
      console.log(this.user);
      if (this.user == null) {
        this.alertController.create({
          header: this.translation.acessoNaoPermitido,
          message: this.translation.facaLogin,
          buttons: [
            {
              text: this.translation.regressar,
              handler: () => {
                this.router.navigateByUrl('login');
              }
            }
          ]
        }).then((alert) => {
          alert.present();
        });
      }
    });
  }

  playVideo() {
    let video = this.user.company.video;
    this.iab.create(video);
  }

}
