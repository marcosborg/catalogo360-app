import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders/orders.service';
import { ModalController } from '@ionic/angular';
import { OrderPage } from '../modals/order/order.page';
import { SchedulePage } from '../modals/schedule/schedule.page';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ReadSchedulePage } from '../modals/read-schedule/read-schedule.page';
import { observable } from 'rxjs';
import { ExpensesService } from '../services/expenses/expenses.service';
import { LanguageService } from '../services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

const removeName = async (key) => {
  await Preferences.remove({ key: key });
};

const clearAll = async () => {
  await Preferences.clear();
}

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
    public alertController: AlertController,
    public ordersController: OrdersService,
    public router: Router,
    public modalController: ModalController,
    public scheduleService: ScheduleService,
    public expensesService: ExpensesService,
    public languageService: LanguageService,
  ) { }

  user: any = [];
  orders: any = [];
  search: string = '';
  choice: string = 'orders';
  schedules: any = [];
  expenses: any = [];
  budget: any = 0;
  total: any = 0;
  balance: any = 0;
  language: string;
  translation: any = [];

  segmentChanged(ev: any) {
    this.choice = ev.detail.value;
  }

  ionViewWillEnter() {
    this.getUser();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getPage4(this.language);
    });
  }

  readOrders() {
    this.ordersController.readOrders(this.user.api_token, this.user.id).subscribe((resp) => {
      this.orders = resp;
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
        this.readOrders();
        this.readSchedules();
        this.getExpenses();
        this.getLanguage();
      }
    });
  }

  logout() {
    clearAll().then(() => {
      window.location.href = '/';
    });
  }

  async createSchedule() {
    this.modalController.create({
      component: SchedulePage,
      backdropDismiss: false
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(() => {
        this.readSchedules();
      });
    });
  }

  readSchedules() {
    let data = {
      api_token: this.user.api_token,
      user_id: this.user.id
    }
    this.scheduleService.readSchedules(data).subscribe((resp) => {
      this.schedules = resp;
    });
  }

  readSchedule(id) {
    this.modalController.create({
      component: ReadSchedulePage,
      backdropDismiss: false,
      componentProps: {
        id: id,
        api_token: this.user.api_token
      }
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then(() => {
        this.readSchedules();
      });
    });
  }

  async openOrder(order_id) {
    const modal = await this.modalController.create({
      component: OrderPage,
      componentProps: {
        'order_id': order_id
      }
    });
    return await modal.present();
  }

  cancel() {
    this.search = '';
    this.readOrders();
  }

  clear() {
    this.search = '';
    this.readOrders();
  }

  searchByClientName() {
    if (this.search.length > 2) {
      let data = {
        api_token: this.user.api_token,
        user_id: this.user.id,
        search: this.search,
      }
      this.ordersController.searchByClientName(data).subscribe((resp) => {
        this.orders = resp;
      });
    } else {
      this.readOrders();
    }
  }

  createExpense() {
    this.alertController.create({
      header: this.translation.novaDespesa,
      subHeader: this.translation.sujeitaAAprovacao,
      inputs: [
        {
          name: 'obs',
          placeholder: this.translation.descricao
        },
        {
          name: 'value',
          placeholder: this.translation.despesa + ' (#.##)'
        }
      ],
      buttons: [
        {
          text: this.translation.continuar,
          cssClass: 'success',
          handler: (resp) => {
            if (!resp.obs || !resp.value) {
              this.alertController.create({
                header: this.translation.osCamposSaoObrigatorios,
              }).then((alert) => {
                alert.present();
              });
            } else {
              console.log('DatePicker');
            }
          }
        },
        {
          text: this.translation.cancelar,
          role: 'destroy'
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  getExpenses() {
    this.expensesService.getExpenses(this.user.api_token).subscribe((resp) => {
      this.expenses = resp['expenses'];
      this.budget = resp['budget'];
      this.total = resp['total'];
      this.balance = resp['balance'];
    });
  }

}
