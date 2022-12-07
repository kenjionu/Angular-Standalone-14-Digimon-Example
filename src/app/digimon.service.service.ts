import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

export interface Digimon{
  id: number,
  name: string;
  href: string;
  images: string;
  
}

export interface DigimonList{
  content:  any;
  pageable: any;
}

@Injectable({
  providedIn: 'root'
})

export class DigimonServiceService {

  constructor(private http: HttpClient) { 

  }
  getDigimonApi(){
    return this.http.get('https://www.digi-api.com/api/v1/digimon')
  }

  getDigimonName(id: any){
    return this.http.get(`https://www.digi-api.com/api/v1/digimon/${id}`)
  }
}



