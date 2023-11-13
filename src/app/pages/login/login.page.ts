import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SecurityService } from 'src/app/services/security/security.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const setName = async (key, value) => {
  await Preferences.set({
    key: key,
    value: value,
  });
};

const checkName = async (key) => {
  return await Preferences.get({ key: 'name' });
};

const removeName = async (key) => {
  await Preferences.remove({ key: key });
};

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    public alertController: AlertController,
    public security: SecurityService,
    public router: Router,
    public languageService: LanguageService
  ) { }

  email: string = '';
  password: string = '';
  data: any;
  language: string = 'PT';
  translation: any = [];
  user: any;

  ionViewWillEnter() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp.value);
      if (this.user !== null) {
        this.router.navigateByUrl('tabs');
      }
    });
    this.changeLanguage();
  }


  doLogin() {
    if (this.email == '' || this.password == '') {
      this.alertController.create({
        header: this.translation.dadosEmFalta,
        message: this.translation.osCamposSaoObrigatorios,
      }).then((alert) => {
        alert.present()
      });
    } else {
      let data = {
        email: this.email,
        password: this.password
      }
      this.security.doLogin(data).subscribe((resp) => {
        if (resp['status'] == true) {
          let user = resp['user'];
          setName('user', JSON.stringify(user)).then(() => {
            this.alertController.create({
              header: this.translation.success,
              message: this.translation.canStartWorking,
              buttons: [
                {
                  text: this.translation.proseguir,
                  handler: () => {
                    setName('language', this.language).then(() => {
                      window.location.href = '/tabs';
                    });
                  }
                }
              ]
            }).then((alert) => {
              alert.present()
            });
          });
        } else {
          this.alertController.create({
            header: this.translation.erroNoAcesso,
            message: this.translation.oEmailOuAPasswordEstaoErrados
          }).then((alert) => {
            alert.present()
          });
        }
      }, (err) => {
        this.alertController.create({
          header: this.translation.erroDeComunicacao,
          message: this.translation.certifiqueSeQueEstaLigadoAInternet
        }).then((alert) => {
          alert.present()
        });
      });
    }
  }

  changeLanguage() {
    this.translation = this.languageService.getLoginPage(this.language);
  }

}
