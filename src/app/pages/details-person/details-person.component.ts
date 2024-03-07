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
  message = '';

  @Input()
  set id(id: string) {
    this.apiSearch.getPerson(id).subscribe(response => {
      this.personDetails = response
      this.message = `🚨🚨🚨 URGENTE: Pessoa Desaparecida 🚨🚨🚨%0a%0aPor favor, nos ajude a encontrar ${response.nome}!%0a%0aℹ️ Descrição:%0a- Nome: ${response.nome}%0a- Idade: ${response.idade}%0a- Sexo: ${response.sexo}%0a- Última Localização Conhecida: ${response.ultimaOcorrencia.localDesaparecimentoConcat}%0a%0a📞 Se você tiver qualquer informação ou avistar ${this.personDetails.nome}, entre em contato conosco imediatamente no número 3613-6981%0a%0aLink com mais informações: ${window.location.href}`;
    });
  }

  constructor(private apiSearch: ApiSearchPersonService) { }

}
