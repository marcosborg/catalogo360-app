import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ScheduleService } from 'src/app/services/schedule/schedule.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-read-schedule',
  templateUrl: './read-schedule.page.html',
  styleUrls: ['./read-schedule.page.scss'],
})
export class ReadSchedulePage implements OnInit {

  @Input() id: string;
  @Input() api_token: string;
  schedule: any = [];
  date: any;
  obs: string;
  state: any;
  state_name: string;
  orders: any = [];
  order_id: any;
  language: string;
  translation: any = [];

  constructor(
    public modalController: ModalController,
    public scheduleService: ScheduleService,
    public alertController: AlertController,
    public languageService: LanguageService
  ) { }

  ngOnInit() {
    this.readSchedule();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getReadSchedule(this.language);
    });
  }

  updateSchedule(state) {
    if (!this.obs) {
      this.alertController.create({
        header: this.translation.dadosInsuficientes,
        message: this.translation.asObservacoesSaoObrigatorias,
      }).then((alert) => {
        alert.present();
      });
    } else {
      let data = {
        id: this.id,
        order_id: this.order_id,
        state_id: state,
        date: this.date,
        obs: this.obs,
        api_token: this.api_token
      }
      this.scheduleService.updateSchedule(data).subscribe(() => {
        this.alertController.create({
          header: this.translation.atualizadoComSucesso,
          message: this.translation.podeContinuar,
          buttons: [
            {
              text: 'Continuar',
              handler: () => {
                this.modalController.dismiss();
              }
            }
          ]
        }).then((alert) => {
          alert.present();
        });
      });
    }
  }

  readUnusedOrdersByUserAndClient() {
    let data = {
      api_token: this.api_token,
      client_id: this.schedule.client_id
    }
    this.scheduleService.readUnusedOrdersByUserAndClient(data).subscribe((resp) => {
      this.orders = resp;
    });
  }

  readSchedule() {
    let data = {
      id: this.id,
      api_token: this.api_token
    }
    this.scheduleService.readSchedule(data).subscribe((resp) => {
      this.schedule = resp;
      this.date = this.schedule.date;
      this.obs = this.schedule.obs;
      this.state = this.schedule.state.id;
      this.state_name = this.schedule.state.name;
      this.order_id = this.schedule.order_id;
      this.readUnusedOrdersByUserAndClient();
    });
  }

  closeModal() {
    this.alertController.create({
      header: this.translation.temACerteza,
      message: this.translation.vaiPerderTodosOsDadosDaVisita,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Apagar',
          handler: () => {
            this.modalController.dismiss();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  closeModal2() {
    this.modalController.dismiss();
  }

}
