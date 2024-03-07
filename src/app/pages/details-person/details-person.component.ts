import { Component, Input } from '@angular/core';
import { ApiSearchPersonService } from '../../services/api-search-person.service';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface PersonDetails {
  "id": number,
  "nome": string,
  "idade": number,
  "sexo": string,
  "urlFoto": string,
  "ultimaOcorrencia": {
    "dtDesaparecimento": string,
    "localDesaparecimentoConcat": string,
    "ocorrenciaEntrevDesapDTO"?: {
      "informacao": string,
      "vestimentasDesaparecido": string
    }
  },

}
@Component({
  selector: 'app-details-person',
  standalone: true,
  imports: [DatePipe, RouterModule, NgIf, AsyncPipe],
  templateUrl: './details-person.component.html',
  styleUrl: './details-person.component.scss'
})
export class DetailsPersonComponent {
  personDetails!: PersonDetails;

  @Input()
  set id(id: string) {
    this.apiSearch.getPerson(id).subscribe(response => {
      this.personDetails = response
    });
  }

  constructor(private apiSearch: ApiSearchPersonService) { }

}
