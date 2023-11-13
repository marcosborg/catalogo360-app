import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.page.html',
  styleUrls: ['./create-client.page.scss'],
})
export class CreateClientPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public securityService: SecurityService,
    public languageService: LanguageService,
  ) { }

  user: any = [];
  countries: any = [];
  name: string = '';
  nif: string = '';
  address: string = '';
  zip: string = '';
  local: string = '';
  country: string = '193';
  email: string = '';
  phone: string = '';
  different_delivery: any = false;
  delivery_address: any = null;
  delivery_zip: any = null;
  delivery_local: any = null;
  delivery_country: string = '193';
  translation: any = [];

  ngOnInit() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      let language = resp.value;
      this.translation = this.languageService.getCreateClient(language);
    });
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
      } else {
        this.getCountries();
      }
    });
  }

  getCountries() {
    this.securityService.getCountries(this.user.api_token).subscribe((resp) => {
      this.countries = resp;
    });
  }

  createClient() {
    if (
      this.name == '' ||
      this.nif == '' ||
      this.address == '' ||
      this.zip == '' ||
      this.local == '' ||
      this.country == '' ||
      this.email == '' ||
      this.phone == ''
    ) {
      this.alertController.create({
        header: this.translation.erroNaInsercao,
        message: this.translation.todosOsCamposSaoObrigatorios,
        buttons: [
          {
            text: this.translation.repetir,
            role: 'cancel'
          }
        ]
      }).then((alert) => {
        alert.present();
      });
    } else {
      this.securityService.createClient(
        this.user.api_token,
        this.name,
        this.nif,
        this.address,
        this.zip,
        this.local,
        this.country,
        this.email,
        this.phone,
        this.user.company_id,
        this.different_delivery,
        this.delivery_address,
        this.delivery_zip,
        this.delivery_local,
        this.delivery_country
      ).subscribe((resp) => {
        this.alertController.create({
          header: this.translation.sucesso,
          message: this.translation.podeAvancarParaAEncomenda,
          buttons: [
            {
              text: this.translation.avancar,
              handler: () => {
                this.router.navigateByUrl('tabs/tab5');
              }
            }
          ]
        }).then((alert) => {
          alert.present();
        });
      });
    }
  }

}
