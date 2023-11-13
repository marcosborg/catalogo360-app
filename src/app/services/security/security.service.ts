import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private http: HttpClient
  ) { }


  doLogin(data) {
    return this.http.post('https://catalogo360.pt/api/login', data);
  }

  getCountries(api_token) {
    let data = {
      api_token: api_token
    }
    return this.http.post('https://catalogo360.pt/api/clients/getCountries', data);
  }

  createClient(
    api_token,
    name,
    nif,
    address,
    zip,
    local,
    country,
    email,
    phone,
    company_id,
    different_delivery,
    delivery_address,
    delivery_zip,
    delivery_local,
    delivery_country
  ) {
    let data = {
      api_token: api_token,
      name: name,
      nif: nif,
      address: address,
      zip: zip,
      local: local,
      country: country,
      email: email,
      phone: phone,
      company_id: company_id,
      different_delivery: different_delivery,
      delivery_address: delivery_address,
      delivery_zip: delivery_zip,
      delivery_local: delivery_local,
      delivery_country: delivery_country
    };
    return this.http.post('https://catalogo360.pt/api/clients/createClient2', data);
  }

  getClients(api_token, url) {
    let data = {
      api_token: api_token
    }
    return this.http.post(url, data);
  }

  getClient(api_token, client_id) {
    let data = {
      api_token: api_token,
      client_id: client_id
    }
    return this.http.post('https://catalogo360.pt/api/clients/getClient', data);
  }

  updateClient(
    api_token,
    name,
    nif,
    address,
    zip,
    local,
    country,
    email,
    phone,
    client_id,
    different_delivery,
    delivery_address,
    delivery_zip,
    delivery_local,
    delivery_country
  ) {
    let data = {
      api_token: api_token,
      name: name,
      nif: nif,
      address: address,
      zip: zip,
      local: local,
      country: country,
      email: email,
      phone: phone,
      client_id: client_id,
      different_delivery: different_delivery,
      delivery_address: delivery_address,
      delivery_zip: delivery_zip,
      delivery_local: delivery_local,
      delivery_country: delivery_country
    };
    return this.http.post('https://catalogo360.pt/api/clients/updateClient', data);
  }

  searchClient(api_token, search) {
    let data = {
      api_token: api_token,
      search: search
    }
    return this.http.post('https://catalogo360.pt/api/clients/searchClient', data);
  }

  getCompanyAsClient(api_token, company_id) {
    let data = {
      api_token: api_token,
      company_id: company_id
    }
    return this.http.post('https://catalogo360.pt/api/clients/getCompanyAsClient', data);
  }

  getUser(api_token) {
    let data = {
      api_token: api_token
    }
    return this.http.post('https://catalogo360.pt/api/catalogs/getUser', data);
  }

}
