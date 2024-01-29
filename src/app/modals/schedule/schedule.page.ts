import { Component, OnInit, SimpleChange } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { SecurityService } from 'src/app/services/security/security.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(
    public ordersService: OrdersService,
    public securityService: SecurityService,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    public scheduleService: ScheduleService,
    public languageService: LanguageService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getUser();
    this.getLanguage();
  }


  date: any;
  search: string = '';
  user: any = [];
  clients: any = [];
  client_id: any;
  client_name: string = '';
  obs: string = '';
  language: string;
  translation: any = [];

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getSchedule(this.language);
    });
  }

  createSchedule() {
    if (!this.date || !this.client_id) {
      this.alertController.create({
        header: this.translation.dadosInsuficientes,
        message: this.translation.peloMenosADataEOClienteDevemSerPreenchidos,
      }).then((alert) => {
        alert.present();
      });
    } else {
      let data = {
        date: this.date,
        client_id: this.client_id,
        user_id: this.user.id,
        api_token: this.user.api_token,
        obs: this.obs
      }
      this.scheduleService.createSchedule(data).subscribe((resp) => {
        console.log(resp);
        this.alertController.create({
          header: this.translation.criadoComSucesso,
          message: this.translation.podeRegressarAAgenda,
        }).then((alert) => {
          alert.present().then(() => {
            this.readSchedule();
          });
        });
      });
    }
  }

  readSchedule() {
    this.modalController.dismiss();
  }

  clear() {
    this.search = '';
    this.clients = [];
  }

  cancel() {
    this.search = '';
    this.clients = [];
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
      this.clients = [];
    }
  }

  selectClient(id, name) {
    this.client_id = id;
    this.client_name = name;
    this.clients = [];
  }

  closeModal() {
    this.alertController.create({
      header: this.translation.temACerteza,
      message: this.translation.vaiPerderTodosOsDadosDaVisita,
      backdropDismiss: false,
      buttons: [
        {
          text: this.translation.apagar,
          handler: () => {
            this.modalController.dismiss();
          }
        },
        {
          text: this.translation.cancelar,
          role: 'cancel'
        }
      ]
    }).then((alert) => {
      alert.present();
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
      }
    });
  }

}
