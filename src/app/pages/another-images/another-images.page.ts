import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { SpecificationsPage } from '../../modals/specifications/specifications.page';
import { DiferentSpecificationsPage } from 'src/app/modals/diferent-specifications/diferent-specifications.page';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-another-images',
  templateUrl: './another-images.page.html',
  styleUrls: ['./another-images.page.scss'],
})
export class AnotherImagesPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public catalogsService: CatalogsService,
    public activatedRouter: ActivatedRoute,
    public modalController: ModalController,
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
    public languageService: LanguageService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getAnotherImages(this.language);
    });
  }

  async getUser() {
    checkName('user').then((resp) => {
      this.user = JSON.parse(resp.value);
      this.getProduct();
      this.getImages();
    });
  }

  getProduct() {
    this.catalogsService.getProduct(this.user.api_token, this.product_id).subscribe((resp) => {
      this.product = resp;
    });
  }

  user: any = [];
  product: any = [];
  product_id: string = this.activatedRouter.snapshot.paramMap.get('id');
  images: any = [];
  language: string;
  translation: any = [];

  specifications() {
    this.modalController.create({
      backdropDismiss: false,
      component: SpecificationsPage,
      componentProps: {
        id: this.product_id
      }
    }).then((modal) => {
      modal.present();
    });
  }

  diferentSpecifications() {
    this.modalController.create({
      backdropDismiss: false,
      component: DiferentSpecificationsPage,
      componentProps: {
        id: this.product_id
      }
    }).then((modal) => {
      modal.present();
    });
  }

  getImages() {
    this.catalogsService.getImages(this.user.api_token, this.product_id, 0).subscribe((resp) => {
      this.images = resp;
    });
  }

  playVideo(video) {
    this.iab.create(video);
  }

  getPdf(pdf) {
    window.location.href = 'https://catalogo360.pt/storage/app/' + pdf, '_new';
  }

  share() {
    this.socialSharing.share(this.product.name, null, 'https://catalogo360.pt/storage/app/' + this.product.cover, null).then(() => {
      console.log('ok');
    }).catch((err) => {
      console.log(err);
    });
  }

}
