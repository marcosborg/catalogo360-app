import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-obs',
  templateUrl: './obs.page.html',
  styleUrls: ['./obs.page.scss'],
})

export class ObsPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public languageService: LanguageService,
  ) { }

  @Input() obs: string;
  @Input() delivery: string;
  @Input() special: string;

  @Input() language: string;
  @Input() translation: any = [];

  ngOnInit() {
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getObs(this.language);
    });
  }

  calcel() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss({
      obs: this.obs,
      delivery: this.delivery,
      special: this.special
    });
  }

}
