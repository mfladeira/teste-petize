import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchPersonService {

  constructor(private http: HttpClient) { }

  getPeople(filter: string) {
    return this.http.get('https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?porPagina=12&status=DESAPARECIDO&pagina=0'.concat(filter));
  }

}
