import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security/security.service';
import { OrdersService } from '../services/orders/orders.service';
import { LanguageService } from '../services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public securityService: SecurityService,
    public ordersService: OrdersService,
    public languageService: LanguageService
  ) { }

  user: any = [];
  clients: any = [];
  search: string = '';
  url: string = 'https://catalogo360.pt/api/clients/getClients';
  language: string;
  translation: any = [];

  ionViewDidEnter() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getPage5(this.language);
    });
  }

  clear() {
    this.search = '';
    this.getClients();
  }

  cancel() {
    this.search = '';
    this.getClients();
  }

  searchClientByName() {
    if (this.search.length > 2) {
      let data = {
        api_token: this.user.api_token,
        company_id: this.user.company_id,
        search: this.search
      }
      this.ordersService.searchClientsByName(data).subscribe((resp) => {
        this.clients = resp;
      });
    } else {
      this.getClients();
    }
  }

  getClients() {
    this.securityService.getClients(this.user.api_token, this.url).subscribe((resp) => {
      this.clients = resp['data'];
      this.url = resp['next_page_url'];
    });
  }

  async getUser() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp.value);
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
      } else {
        this.getClients();
      }
    });
  }

  createClient() {
    this.router.navigateByUrl('create-client');
  }

  edit(client_id) {
    this.router.navigateByUrl('edit-client/' + client_id);
  }

  loadData(event) {
    this.securityService.getClients(this.user.api_token, 'https://catalogo360.pt/api/clients/getClients').subscribe((resp) => {
      this.clients = this.clients.concat(resp['data']);
      this.url = resp['next_page_url'];
      event.target.complete();
    });
  }
}
