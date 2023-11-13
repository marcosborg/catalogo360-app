import { Component, OnInit, Input } from '@angular/core';
import { AlertController, PickerController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/services/catalogs/catalogs.service';
import { ModalController } from '@ionic/angular';
import { async } from '@angular/core/testing';
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
  selector: 'app-diferent-specifications',
  templateUrl: './diferent-specifications.page.html',
  styleUrls: ['./diferent-specifications.page.scss'],
})
export class DiferentSpecificationsPage implements OnInit {

  @Input() id: string;
  product: any = [];
  user: any = [];
  variations: any = [];
  features: any = [];
  cart: any = [];
  obs: string = '';
  variation_name: string;
  language: string;
  translation: any = [];

  constructor(
    public alertController: AlertController,
    public router: Router,
    public catalogsService: CatalogsService,
    public pickerController: PickerController,
    public modalController: ModalController,
    public languageService: LanguageService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getDiferentSpecifications(this.language);
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
        this.getVariations();
        this.getFeatures();
        this.getProduct();
        this.getLanguage();
      }
    });
  }

  getProduct() {
    this.catalogsService.getProduct(this.user.api_token, this.id).subscribe((resp) => {
      this.product = resp;
    });
  }

  getVariations() {
    this.catalogsService.getVariations(this.user.api_token, this.id).subscribe((resp) => {
      this.variations = resp['variations'];
      this.variation_name = resp['variation'];
    });
  }

  getFeatures() {
    this.catalogsService.getFeatures(this.user.api_token, this.id).subscribe((resp) => {
      this.features = resp;
    });
  }

  async addToCart(feature_id, feature_name, variation_name, price) {
    const alert = await this.alertController.create({
      header: 'Quantidade',
      inputs: [
        {
          name: 'qty',
          type: 'number',
          value: 1,
          min: 1
        },
        {
          name: 'obs',
          type: 'textarea',
          placeholder: 'Observações'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Inserir',
          handler: (resp) => {
            let data = resp;
            let html = '';
            this.features.forEach(element => {
              html += '(' + element.name + ' ';
              element.values.forEach(value => {
                if (value.product_id == this.product.id) {
                  html += value.name + ') ';
                }
              });
            });
            let final_price = 0;
            if (price) {
              final_price = price;
            } else {
              final_price = this.product.price;
            }
            let product = {
              product_id: this.id,
              reference: this.product.reference,
              variation_name: variation_name,
              feature_id: feature_id,
              feature_name: feature_name,
              features: html,
              qty: data.qty,
              obs: data.obs,
              product_name: this.product.name,
              price: final_price,
              image: this.product.cover,
              vat_id: this.product.vat_id,
              vat: this.product.vat.value,
              vat_name: this.product.vat.name,
            }
            this.cart.push(product);
          }
        }
      ]
    });
    await alert.present();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  addToOrder() {
    checkName('order').then((resp) => {
      let data = JSON.parse(resp.value);
      if (data == null) {
        setName('order', JSON.stringify(this.cart));
      } else {
        let order = JSON.parse(resp.value);
        this.cart.forEach(element => {
          order.push(element);
        });
        setName('order', JSON.stringify(order));
      }
    });
    this.obs = '';
    this.dismiss();
  }

}
