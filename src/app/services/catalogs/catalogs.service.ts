import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(
    public http: HttpClient
  ) { }

  getCatalogs(api_token) {
    let data = {
      api_token: api_token
    };
    return this.http.post('https://catalogo360.pt/api/catalogs/getCatalogs', data);
  }

  getProducts(api_token, id, skip) {
    let data = {
      api_token: api_token,
      id: id,
      skip: skip
    };
    return this.http.post('https://catalogo360.pt/api/catalogs/getProducts', data);
  }

  getCatalog(api_token, id) {
    let data = {
      api_token: api_token,
      id: id
    };
    return this.http.post('https://catalogo360.pt/api/catalogs/getCatalog', data);
  }

  getProduct(api_token, id) {
    let data = {
      api_token: api_token,
      id: id
    };
    return this.http.post('https://catalogo360.pt/api/catalogs/getProduct', data);
  }

  getVariations(api_token, id) {
    let data = {
      api_token: api_token,
      product_id: id
    };
    return this.http.post('https://catalogo360.pt/api/catalogs/getVariations2', data);
  }

  getFeatures(api_token, id) {
    let data = {
      api_token: api_token,
      product_id: id
    }
    return this.http.post('https://catalogo360.pt/api/catalogs/getFeatures', data);
  }

  getImages(api_token, product_id, rotate) {
    let data = {
      api_token: api_token,
      product_id: product_id,
      rotate: rotate
    }
    return this.http.post('https://catalogo360.pt/api/catalogs/getImages', data);
  }

  getCategories(api_token, company_id) {
    let data = {
      api_token: api_token,
      company_id: company_id
    }
    return this.http.post('https://catalogo360.pt/api/catalogs/getCategories', data);
  }

  searchByReference(data) {
    return this.http.post('https://catalogo360.pt/api/catalogs/searchByReference', data);
  }

  searchByCatalog(data) {
    return this.http.post('https://catalogo360.pt/api/catalogs/searchByCatalog', data);
  }

  getProductsByCategories(data) {
    return this.http.post('https://catalogo360.pt/api/catalogs/getProductsByCategories', data);
  }

  emailCatalog(data) {
    return this.http.post('https://catalogo360.pt/api/emailCatalog', data);
  }

  shareCatalog(data) {
    return this.http.post('https://catalogo360.pt/api/shareCatalog', data);
  }

}
