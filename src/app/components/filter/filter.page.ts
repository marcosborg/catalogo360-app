import { Component, OnInit, Input } from '@angular/core';
import { CatalogsService } from 'src/app/services/catalogs/catalogs.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';
import { Preferences } from '@capacitor/preferences';

const checkName = async (key) => {
  return await Preferences.get({ key: key });
};

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  @Input() catalog_id: string;
  user: any = [];
  categories: any = [];
  checked: any = [];
  products: any = [];
  filteredProducts: any = [];
  language: string;
  translation: any = [];

  constructor(
    public catalogsService: CatalogsService,
    public alertController: AlertController,
    public router: Router,
    public modalController: ModalController,
    public languageService: LanguageService,
  ) { }

  ngOnInit() {
    this.getUser();
    this.getLanguage();
  }

  getLanguage() {
    checkName('language').then((resp) => {
      this.language = resp.value;
      this.translation = this.languageService.getFilter(this.language);
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
        this.getCategories();
      }
    });
  }

  getCategories() {
    this.catalogsService.getCategories(this.user.api_token, this.user.company_id).subscribe((resp) => {
      this.categories = resp;
      this.categories.forEach(element => {
        this.checked.push({
          category_id: element.id,
          name: element.name,
          isChecked: false
        })
      });
    });
  }

  filter() {
    let data = [];
    this.checked.forEach(check => {
      if (check.isChecked == true) {
        data.push(check);
      }
    });
    this.modalController.dismiss({
      data: data
    });
  }

}
