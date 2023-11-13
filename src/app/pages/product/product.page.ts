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
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public catalogsService: CatalogsService,
    public activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
    public languageService: LanguageService,
  ) { }

  ngOnInit() {
  }

  user: any = [];
  id: any = this.activatedRoute.snapshot.paramMap.get('id');
  product: any = [];
  images360: any = [];
  images: any = [];
  lastPosition: any;
  selected: number = 0;
  count: any = 0;
  language: string;
  translation: any = [];

  ionViewWillEnter() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getProduct(this.language);
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
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.catalogsService.getProduct(this.user.api_token, this.id).subscribe((resp) => {
      this.product = resp;
      this.getImages360();
    });
  }

  getImages360() {
    this.catalogsService.getImages(this.user.api_token, this.product.id, 1).subscribe((resp) => {
      this.images360 = resp;
    });
  }

  specifications() {
    this.modalController.create({
      backdropDismiss: false,
      component: SpecificationsPage,
      componentProps: {
        id: this.id
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
        id: this.id
      }
    }).then((modal) => {
      modal.present();
    });
  }

  handlePan(ev) {
    if (this.lastPosition == undefined) {
      this.lastPosition = ev.center.x;
    }
    this.count = this.count + 1;
    if (this.count == 5) {
      if (this.lastPosition >= (ev.center.x)) {
        this.selected = this.selected - 1;
        if (this.selected < 0) {
          this.selected = this.images360.length - 1;
        }
      } else {
        this.selected = this.selected + 1;
        if (this.selected >= this.images360.length) {
          this.selected = 0;
        }
      }
      this.lastPosition = ev.center.x;
    }
    if (this.count === 5) {
      this.count = 0;
    }
  }

  playVideo(video) {
    this.iab.create(video);
  }

  getPdf(pdf) {
    window.location.href = 'https://catalogo360.pt/storage/app/' + pdf, '_new';
  }

  share() {
    this.socialSharing.share(this.product.reference, null, 'https://catalogo360.pt/storage/app/' + this.product.cover, null).then(() => {
      console.log('ok');
    }).catch((err) => {
      console.log(err);
    });
  }

  goCheckout(){
    window.location.href="/tabs/tab3";
  }

}
