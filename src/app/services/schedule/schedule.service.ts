import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    public http: HttpClient
  ) { }

  createSchedule(data) {
    return this.http.post('https://catalogo360.pt/api/schedule/createSchedule', data);
  }

  readSchedules(data) {
    return this.http.post('https://catalogo360.pt/api/schedule/readSchedules', data);
  }

  updateSchedule(data) {
    return this.http.post('https://catalogo360.pt/api/schedule/updateSchedule', data);
  }

  readSchedule(data) {
    return this.http.post('https://catalogo360.pt/api/schedule/readSchedule', data);
  }

  readScheduleStates(data) {
    return this.http.post('https://catalogo360.pt/api/schedule/readScheduleStates', data);
  }

  readUnusedOrdersByUserAndClient(data) {
    return this.http.post('https://catalogo360.pt/api/schedule/readUnusedOrdersByUserAndClient', data);
  }

}
