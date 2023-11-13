import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public alertController: AlertController,
    public router: Router,
  ) { }

  user: any = [];
  total: any;

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp.value);
      if (this.user == null) {
        this.alertController.create({
          header: 'Acesso não permitido',
          message: 'Faça login',
          buttons: [
            {
              text: 'Regressar',
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

}
