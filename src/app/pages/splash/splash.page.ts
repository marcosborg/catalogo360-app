import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {

  constructor(
    public router: Router
  ) { }

  ionViewWillEnter() {
    checkName('user').then((resp) => {
      if (resp) {
        let user = JSON.parse(resp['value']);
        if (user) {
          window.location.href = "/tabs";
        } else {
          window.location.href = "/login";
        }
      } else {
        window.location.href = "/login";
      }
    });
  }

}
