import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  createOrder(data) {
    return this.http.post('https://catalogo360.pt/api/orders/createOrder', data);
  }

  readOrders(api_token, user_id) {
    let data = {
      api_token: api_token,
      user_id: user_id
    }
    return this.http.post('https://catalogo360.pt/api/orders/readOrders', data);
  }

  searchByClientName(data) {
    return this.http.post('https://catalogo360.pt/api/orders/searchByClientName', data);
  }

  readOrder(data) {
    return this.http.post('https://catalogo360.pt/api/orders/readOrder', data);
  }

  searchClientsByName(data) {
    return this.http.post('https://catalogo360.pt/api/orders/searchClientsByName', data);
  }

  getVats() {
    return this.http.get('https://catalogo360.pt/api/getVats');
  }

  getPayByLink(data) {
    return this.http.post('https://catalogo360.pt/api/getPayByLink', data);
  }

}
