import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RptaSchool } from '../interfaces/schools';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  constructor(private _http: HttpClient) {}

  getIndicadoresSchool() {
    return this._http.get<RptaSchool>('http://localhost:4200/assets/json/indicadores.json')
  }

}
