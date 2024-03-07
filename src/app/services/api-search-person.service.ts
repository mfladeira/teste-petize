import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDetails } from '../interfaces/PersonDetails';
import { Person } from '../interfaces/Person';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchPersonService {

  constructor(private http: HttpClient) { }

  getPeople(filter: string): Observable<Person> {
    return this.http.get<Person>('https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?porPagina=12&status=DESAPARECIDO'.concat(filter));
  }

  getPerson(id: string): Observable<PersonDetails> {
    return this.http.get<PersonDetails>(`https://abitus-api.pjc.mt.gov.br/v1/pessoas/${id}`);
  }
}
