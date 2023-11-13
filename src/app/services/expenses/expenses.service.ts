import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(
    public http: HttpClient
  ) { }

  newExpense(data) {
    return this.http.post('https://catalogo360.pt/api/expenses/newExpense', data);
  }

  getExpenses(api_token) {
    let data = {
      api_token: api_token
    }
    return this.http.post('https://catalogo360.pt/api/expenses/getExpenses', data);
  }

}
