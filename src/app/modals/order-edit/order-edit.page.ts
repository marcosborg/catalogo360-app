import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.page.html',
  styleUrls: ['./order-edit.page.scss'],
})
export class OrderEditPage implements OnInit {

  @Input() qty: string;
  @Input() features: string;
  @Input() obs: string;
  language: string;
  translation: any = [];

  constructor(
    public modalController: ModalController,
    public languageService: LanguageService,
  ) { }

  ngOnInit() {
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getOrderEdit(this.language);
    });
  }

  modalDismiss() {
    this.modalController.dismiss();
  }

  modalSave() {
    this.modalController.dismiss({
      'qty': this.qty,
      'features': this.features,
      'obs': this.obs
    });
  }

}
