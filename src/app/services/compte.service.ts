import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compte} from '../modal/compte';

@Injectable({
  providedIn: 'root',

})
export class CompteService {
  private baseUrl = "http://localhost:8091/Compte";

  constructor(private http: HttpClient) { }

  listCompte(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}`);
  }

  addCompte(compte: Compte): Observable<Compte[]> {
    return this.http.post<Compte[]>(`${this.baseUrl}`, compte);
  }

  deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}, ${id}`);
  }

  updateCompte(compte: Compte): Observable<Compte> {
    return this.http.put<Compte>(`${this.baseUrl}`, compte);
  }

}
