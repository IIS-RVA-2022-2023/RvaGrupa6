import { Artikl } from './../models/artikl';
import { ARTIKL_URL } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtiklService {

  constructor(private httpClient: HttpClient) { }

  public getAllArtikls(): Observable<any>{
    return this.httpClient.get(`${ARTIKL_URL}`);
  }
  
  public addArtikl(artikl:Artikl):Observable<any>{
    return this.httpClient.post(`${ARTIKL_URL}`,artikl);
  }

  public updateArtikl(artikl:Artikl):Observable<any>{
    return this.httpClient.put(`${ARTIKL_URL}/${artikl.id}`,artikl);
  }
  
  public deleteArtikl(id:number):Observable<any>{
    return this.httpClient.delete(`${ARTIKL_URL}/${id}`);
  }
}