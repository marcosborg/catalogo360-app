import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, IonInfiniteScroll, ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { FilterPage } from '../../components/filter/filter.page';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';
import { Share } from '@capacitor/share';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public catalogsService: CatalogsService,
    public activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public languageService: LanguageService,
    public toastController: ToastController,
    public loadingController: LoadingController,
  ) { }

  user: any = [];
  id: any = this.activatedRoute.snapshot.paramMap.get('id');
  catalog: any = [];
  products: any = [];
  checked: any;
  total: any = 0;
  language: string;
  translation: any = [];

  ngOnInit() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getCatalog(this.language);
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
        this.getProducts();
        this.getCatalog();
      }
    });
  }

  getCatalog() {
    this.catalogsService.getCatalog(this.user.api_token, this.id).subscribe((resp) => {
      this.catalog = resp;
    });
  }

  getProducts() {
    this.catalogsService.getProducts(this.user.api_token, this.id, 0).subscribe((resp) => {
      this.products = resp;
      this.total = this.total + this.products.length;
    });
  }

  goProduct(product_id) {
    this.catalogsService.getProduct(this.user.api_token, product_id).subscribe((resp) => {
      if (resp['rotating'] == 1) {
        this.router.navigateByUrl('product/' + product_id);
      } else {
        this.router.navigateByUrl('another-images/' + product_id);
      }
    });
  }

  openFilter() {
    this.modalController.create({
      component: FilterPage,
      componentProps: {
        catalog_id: this.id
      }
    }).then((modal) => {
      modal.present();
      modal.onWillDismiss().then((resp) => {
        let data = {
          data: JSON.stringify(resp.data.data),
          api_token: this.user.api_token,
          catalog_id: this.catalog.id
        };
        this, this.catalogsService.getProductsByCategories(data).subscribe((resp) => {
          this.products = resp;
        });
      });
    });
  }

  loadData(event) {
    this.catalogsService.getProducts(this.user.api_token, this.id, this.total).subscribe((resp) => {
      if (resp['length'] > 0) {
        let prods = [];
        this.products.forEach(product => {
          prods.push(product);
        });
        this.products = resp;
        this.products.forEach(product => {
          prods.push(product);
        });
        this.products = prods;
        this.total = this.total + 10;
      }
      event.target.complete();
    });
  }

  emailCatalog(id) {
    this.alertController.create({
      header: this.translation.partilharCatalogo,
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'message',
          type: 'textarea',
          placeholder: this.translation.message
        }
      ],
      buttons: [
        {
          text: this.translation.cancelar,
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: this.translation.enviar,
          handler: (inputs) => {
            let data = {
              api_token: this.user.api_token,
              id: id,
              email: inputs.email,
              message: inputs.message
            }
            this.catalogsService.emailCatalog(data).subscribe((resp) => {
              this.toastController.create({
                message: this.translation.enviado,
                duration: 1500,
                position: 'middle',
              }).then((toast) => {
                toast.present();
              })
            }, (err) => {
              console.log(err);
            });
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  shareCatalog(id) {
    this.loadingController.create().then((loading) => {
      loading.present();
      let data = {
        api_token: this.user.api_token,
        id: id,
      }
      this.catalogsService.shareCatalog(data).subscribe((resp) => {
        loading.dismiss();
        console.log(resp);
        Share.share({
          title: 'Partilha de catálogo',
          url: resp['url'],
          dialogTitle: 'Share with buddies',
        });
      });
    });
  }
}
