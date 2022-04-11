import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from '../demande/demande';

@Injectable({
    providedIn: 'root'
  })
  export class DemandeService {
    private baseUrl = "http://localhost:8082/demande";

    constructor(private httpClient: HttpClient) { }
  
    getDemandesList(): Observable<Demande[]>{
      return this.httpClient.get<Demande[]> (`${this.baseUrl}`);
    }
  
    createDemande(demande: Demande): Observable<Demande[]> {
      return this.httpClient.post<Demande[]>(`${this.baseUrl}`, demande);
    }
  
    updateDemande(NumDemande: number, demande: Demande): Observable<Object> {
      return this.httpClient.put(`${this.baseUrl}/${NumDemande}`, demande);
    }
  
    deleteDemande(NumDemande: number): Observable<Object> {
      return this.httpClient.delete(`${this.baseUrl}/${NumDemande}`, { responseType: 'text' });
    }
  
    getDemandeById(NumDemande: number): Observable<Demande> {
      return this.httpClient.get<Demande>(`${this.baseUrl}/${NumDemande}`);
    }
  }