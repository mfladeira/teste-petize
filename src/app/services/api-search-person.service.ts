import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonDetails } from '../pages/details-person/details-person.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchPersonService {

  constructor(private http: HttpClient) { }

  getPeople(filter: string) {
    return this.http.get('https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?porPagina=12&status=DESAPARECIDO'.concat(filter));
  }

  getPerson(id: string): Observable<PersonDetails> {
    return this.http.get<PersonDetails>(`https://abitus-api.pjc.mt.gov.br/v1/pessoas/${id}`);
  }
}
