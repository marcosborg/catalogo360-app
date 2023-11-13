import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { ModalController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(
    public ordersService: OrdersService,
    public languageService: LanguageService,
    public modalController: ModalController
  ) { }

  @Input() order_id: string;
  user: any;
  api_token: string = '';
  order: any;
  cart: any;
  total: any = 0;
  language: string;
  translation: any = [];

  ngOnInit() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp.value);
      this.api_token = this.user.api_token;
      this.readOrder();
    });
    this.getLanguage();    
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getOrder(this.language);
    });
  }

  readOrder() {
    let data = {
      api_token: this.api_token,
      id: this.order_id
    }
    this.ordersService.readOrder(data).subscribe((resp) => {
      this.order = resp;
      this.cart = JSON.parse(this.order.cart);
      this.cart.forEach(element => {
        this.total = this.total + element.price * element.qty * ((element.vat / 100) + 1);
      });
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
