import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CatalogsService } from '../services/catalogs/catalogs.service';
import { LanguageService } from '../services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public alertController: AlertController,
    public router: Router,
    public catalogsService: CatalogsService,
    public languageService: LanguageService
  ) { }

  user: any;
  catalogs: any = [];
  search: string = '';
  search2: string = '';
  products: any = [];
  language: string;
  translation: any = [];

  ngOnInit() {
    this.getUser();
    this.getLanguage();
  }

  async getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getPage2(this.language);
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
        this.getCatalogs();
      }
    });
  }

  getCatalogs() {
    this.catalogsService.getCatalogs(this.user.api_token).subscribe((resp) => {
      this.catalogs = resp;
    });
  }

  searchByReference() {
    let data = {
      api_token: this.user.api_token,
      search: this.search
    }
    this.catalogsService.searchByReference(data).subscribe((data) => {
      this.products = data;
    }, (err) => {
      console.log(err);
    });
  }

  searchByCatalog() {
    let data = {
      api_token: this.user.api_token,
      search: this.search2
    }
    this.catalogsService.searchByCatalog(data).subscribe((data) => {
      this.catalogs = data;
      console.log(this.catalogs);
    }, (err) => {
      console.log(err);
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

}
