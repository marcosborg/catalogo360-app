import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from '../../services/security/security.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const setName = async (key, value) => {
  await Preferences.set({
    key: key,
    value: value,
  });
};

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public securityService: SecurityService,
    public languageService: LanguageService
  ) { }

  user: any = [];
  client_id: string = this.activatedRoute.snapshot.paramMap.get('id');
  client: any = [];
  countries: any = [];
  translation: any = [];
  country_id: any;

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      let language = resp.value;
      this.translation = this.languageService.getEditClient(language);
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
        this.getClient();
      }
    });
  }

  getCountries() {
    this.securityService.getCountries(this.user.api_token).subscribe((resp) => {
      this.countries = resp;
      this.country_id = 193;
    });
  }

  getClient() {
    this.securityService.getClient(this.user.api_token, this.client_id).subscribe((resp) => {
      this.client = resp;
      this.country_id = this.client.country.id;
    });
  }

  updateClient() {
    if (this.client.different_delivery == 0) {
      this.client.different_delivery = null;
    }
    if (
      this.client.name == '' ||
      this.client.address == '' ||
      this.client.zip == '' ||
      this.client.local == '' ||
      this.client.country == this.country_id ||
      this.client.email == '' ||
      this.client.phone == ''
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
      })
    } else {
      this.securityService.updateClient(
        this.user.api_token,
        this.client.name,
        this.client.nif,
        this.client.address,
        this.client.zip,
        this.client.local,
        this.country_id,
        this.client.email,
        this.client.phone,
        this.client.id,
        this.client.different_delivery,
        this.client.delivery_address,
        this.client.delivery_zip,
        this.client.delivery_local,
        this.client.delivery_country
      ).subscribe((resp) => {
        this.alertController.create({
          header: this.translation.sucesso,
          message: this.translation.podeAvancarParaAEncomenda,
          buttons: [
            {
              text: this.translation.avancar,
              handler: () => {
                this.securityService.getUser(this.user.api_token).subscribe((resp) => {
                  console.log(resp);
                  let user = resp;
                  setName('user', JSON.stringify(user)).then(() => {
                    this.router.navigateByUrl('tabs/tab3');
                  });
                });
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
