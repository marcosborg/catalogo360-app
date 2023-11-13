import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security/security.service';
import { OrdersService } from '../services/orders/orders.service';
import { MATH_PIPES } from 'ngx-pipes';
import { ModalController } from '@ionic/angular';
import { ObsPage } from '../modals/obs/obs.page';
import { OrderEditPage } from '../modals/order-edit/order-edit.page';
import { LanguageService } from '../services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

const setName = async (key, value) => {
  await Preferences.set({
    key: key,
    value: value,
  });
};

const removeName = async (key) => {
  await Preferences.remove({ key: key });
};

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public securityService: SecurityService,
    public ordersService: OrdersService,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public languageService: LanguageService
  ) { }

  user: any = [];
  order: any = [];
  search: string = '';
  clients: any = [];
  client: any = 0;
  total: number = 0;
  total_vat: number = 0;
  obs: string;
  delivery: string;
  special: string;
  vats: any = [];
  buttons: any = [];
  product_id: number;
  deliveryAddress: string = 'primary';
  count: number = 0;
  language: string;
  translation: any = [];

  async getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getPage3(this.language);
    });
  }

  ionViewDidEnter() {
    this.getUser();
    this.getOrder();
    this.getVats();
    this.getLanguage();
  }

  async getUser() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp.value);
      if (this.user.client == 1) {
        this.client = this.user.client_data;
      }
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

  getVats() {
    this.ordersService.getVats().subscribe((resp) => {
      this.vats = resp;
      this.vats.forEach(vat => {
        this.buttons.push({
          text: vat.name,
          handler: () => {
            let ord = [];
            this.order.forEach(o => {
              if (this.product_id == o.product_id) {
                ord.push({
                  feature_id: o.feature_id,
                  feature_name: o.feature_name,
                  features: o.features,
                  image: o.image,
                  obs: o.obs,
                  price: o.price,
                  product_id: o.product_id,
                  product_name: o.product_name,
                  qty: o.qty,
                  reference: o.reference,
                  variation_name: o.variation_name,
                  vat: vat.value,
                  vat_id: vat.id,
                  vat_name: vat.name,
                });
              } else {
                ord.push({
                  feature_id: o.feature_id,
                  feature_name: o.feature_name,
                  features: o.features,
                  image: o.image,
                  obs: o.obs,
                  price: o.price,
                  product_id: o.product_id,
                  product_name: o.product_name,
                  qty: o.qty,
                  reference: o.reference,
                  variation_name: o.variation_name,
                  vat: o.vat,
                  vat_id: o.vat_id,
                  vat_name: o.vat_name,
                });
              }
            });
            this.order = ord;
            setName('order', JSON.stringify(this.order)).then(() => {
              this.getOrder();
            });
          }
        });
      });
      this.buttons.push(
        {
          text: this.translation.cancelar,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      )
    });
  }

  emptyOrder() {
    this.alertController.create({
      header: this.translation.temACerteza,
      message: this.translation.aAccaoEIrreversivel,
      buttons: [
        {
          text: this.translation.cancelar,
          role: 'cancel'
        },
        {
          text: this.translation.apagarTudo,
          handler: () => {
            removeName('order').then(() => {
              this.getOrder();
            });
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  getOrder() {
    checkName('order').then((resp) => {
      this.order = JSON.parse(resp.value);
      let total = 0;
      let total_vat = 0;
      if (this.order != null) {
        this.order.forEach(element => {
          total = total + (element.qty * element.price);
          total_vat = (total_vat + (element.qty * element.price)) * (element.vat * 0.01);
        });
      }
      this.total = total;
      this.total_vat = Math.round((total_vat + this.total) * 100) / 100;
    });
  }

  OpenObs() {
    this.modalController.create({
      component: ObsPage,
      componentProps: {
        obs: this.obs,
        delivery: this.delivery,
        special: this.special
      }
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((resp) => {
        this.obs = resp.data.obs;
        this.delivery = resp.data.delivery;
        this.special = resp.data.special;
      });
    });
  }

  edit(feature_id) {
    this.order.forEach(element => {
      if (element.feature_id == feature_id) {
        this.modalController.create({
          component: OrderEditPage,
          componentProps: {
            qty: element.qty,
            features: element.features,
            obs: element.obs,
          }
        }).then((modal) => {
          modal.onDidDismiss().then((data) => {
            element.qty = data.data.qty;
            element.features = data.data.features;
            element.obs = data.data.obs;
            setName('order', JSON.stringify(this.order)).then(() => {
              this.getOrder();
            });
          });
          modal.present();
        });
      }
    });
  }

  delete(feature_id) {
    this.alertController.create({
      header: this.translation.temACerteza,
      message: this.translation.aAccaoEIrreversivel,
      buttons: [
        {
          text: this.translation.cancelar,
          role: 'cancel'
        },
        {
          text: this.translation.apagar,
          handler: () => {
            let ele = [];
            this.order.forEach(element => {
              if (element.feature_id != feature_id) {
                ele.push(element);
              }
            });
            this.order = ele;
            setName('order', JSON.stringify(this.order)).then(() => {
              this.getOrder();
            });
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  searchClient() {
    if (this.search.length > 2) {
      this.securityService.searchClient(this.user.api_token, this.search).subscribe((resp) => {
        this.clients = resp;
      });
    }
  }

  cancel() {
    this.clients = [];
  }

  clear() {
    this.clients = [];
  }

  selectClient(id) {
    this.securityService.getClient(this.user.api_token, id).subscribe((resp) => {
      this.client = resp;
      this.clients = [];
      this.search = '';
    });
  }

  resetClient() {
    this.client = null;
  }

  createOrder() {
    if (this.order == null) {
      this.alertController.create({
        header: this.translation.encomendaSemProductos,
        message: this.translation.coloqueProductosAntesDeFecharAEncomenda,
        buttons: [
          {
            text: this.translation.irParaCatalogos,
            handler: () => {
              this.router.navigateByUrl('tabs/tab2');
            }
          }
        ]
      }).then((alert) => {
        alert.present();
      });
    } else {
      if (!this.special || !this.delivery) {
        this.alertController.create({
          header: this.translation.faltamDadosEmINFORMACOESADICIONAIS,
          message: this.translation.eObrigatorioQuePreenchaADataDeEntregaEAsCondicoesDePagamento,
        }).then((alert) => {
          alert.present();
        });
      } else {
        let data = {
          api_token: this.user.api_token,
          cart: JSON.stringify(this.order),
          obs: this.obs,
          delivery: this.delivery,
          special: this.special,
          total: this.total,
          client_id: this.client.id,
          user_id: this.user.id,
          company_id: this.user.company_id,
          deliveryAddress: this.deliveryAddress
        }
        this.ordersService.createOrder(data).subscribe((resp) => {
          console.log(resp);
          this.alertController.create({
            header: this.translation.encomendaEnviada,
            subHeader: this.translation.osDadosDaEncomendaForamEnviadosPorEmail,
            message: this.translation.podeConfirmarARececaoNoEmailEEscolherOsMetodosDePagamentoConstantesNoMesmo,
            backdropDismiss: false,
            buttons: [
              {
                text: this.translation.fechar,
                handler: () => {
                  removeName('order').then(() => {
                    this.user = [];
                    this.order = [];
                    this.search = '';
                    this.clients = [];
                    this.client = null;
                    this.total = 0;
                    this.obs = '';
                    this.delivery = '';
                    this.special = '';
                    this.total = 0;
                    this.total_vat = 0;
                  });
                }
              }
            ]
          }).then((alert) => {
            alert.present();
          });
        }, (error) => {
          console.log(error);
        });
      }
    }
  }

  pay() {
    if (this.order == null) {
      this.alertController.create({
        header: this.translation.encomendaSemProductos,
        message: this.translation.coloqueProductosAntesDeFecharAEncomenda,
        buttons: [
          {
            text: this.translation.irParaCatalogos,
            handler: () => {
              this.router.navigateByUrl('tabs/tab2');
            }
          }
        ]
      }).then((alert) => {
        alert.present();
      });
    } else {
      if ((!this.special || !this.delivery) && this.user.company_id != 33) {
        this.alertController.create({
          header: this.translation.faltamDadosEmINFORMACOESADICIONAIS,
          message: this.translation.eObrigatorioQuePreenchaADataDeEntregaEAsCondicoesDePagamento,
        }).then((alert) => {
          alert.present();
        });
      } else {
        if (this.user.client_data.address !== null) {
          let data = {
            api_token: this.user.api_token,
            cart: JSON.stringify(this.order),
            obs: this.obs,
            delivery: this.delivery,
            special: this.special,
            total: this.total,
            client_id: this.client.id,
            user_id: this.user.id,
            company_id: this.user.company_id,
            deliveryAddress: this.deliveryAddress
          }
          this.ordersService.createOrder(data).subscribe((resp) => {
            this.alertController.create({
              header: this.translation.encomendaEnviada,
              subHeader: this.translation.osDadosDaEncomendaForamEnviadosPorEmail,
              message: this.translation.podeConfirmarARececaoNoEmailEEscolherOsMetodosDePagamentoConstantesNoMesmo,
              backdropDismiss: false,
              buttons: [
                {
                  text: this.translation.fechar,
                  handler: () => {
                    removeName('order').then(() => {
                      this.user = [];
                      this.order = [];
                      this.search = '';
                      this.clients = [];
                      this.client = null;
                      this.total = 0;
                      this.obs = '';
                      this.delivery = '';
                      this.special = '';
                      this.total = 0;
                      this.total_vat = 0;
                    });
                  }
                }
              ]
            }).then((alert) => {
              alert.present();
              if (this.user.company_id == 33) {
                let data = {
                  api_token: this.user.api_token,
                  id: resp['id'],
                  amount: resp['total'],
                }
                this.ordersService.getPayByLink(data).subscribe((resp) => {
                  removeName('order').then(() => {
                    this.user = [];
                    this.order = [];
                    this.search = '';
                    this.clients = [];
                    this.client = null;
                    this.total = 0;
                    this.obs = '';
                    this.delivery = '';
                    this.special = '';
                    this.total = 0;
                    this.total_vat = 0;
                    window.location.href = JSON.parse(resp['link']);
                  });
                });
              }
            });
          });
        } else {
          this.router.navigateByUrl('edit-client/' + this.user.client_id);
        }
      }
    }
  }

  goProduct(product_id) {
    this.router.navigateByUrl('product/' + product_id[0].product_id);
  }

  async changeVat(product_id) {
    this.product_id = product_id;
    const actionSheet = await this.actionSheetController.create({
      header: this.translation.iVAs,
      buttons: this.buttons
    });
    await actionSheet.present();
  }

  addressSelected(type) {

  }
}
