import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { CardComponent } from '../../components/card/card.component';
import { ApiSearchPersonService } from '../../services/api-search-person.service';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, CardComponent, NgFor, NgIf, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nameInput = "";
  initialAge = "";
  endAge = "";
  selectedGender = 'empty';
  listOfPeople = [];
  page = 0;
  maxPage = 0;

  constructor(private apiSearch: ApiSearchPersonService) { }

  ngOnInit() {
    this.getPeople('&pagina=0')
  }

  onChangeNameInput(value: string) {
    this.nameInput = value;
  }
  onChangeInitialAge(value: string) {
    this.initialAge = value;
  }
  onChangeEndAge(value: string) {
    this.endAge = value;
  }

  getPeople(filter: string) {
    this.apiSearch.getPeople(filter).subscribe((response: any) => {
      this.listOfPeople = response?.content;
      this.maxPage = response?.totalPages - 1
    })
  }

  search() {
    const filter = this.getFilter();
    this.page = 0;
    this.getPeople(filter);
  }

  getFilter() {
    let filter = '';

    if (this.nameInput !== '') {
      filter += `&nome=${this.nameInput.trim()}`;
    }

    if (this.initialAge !== '') {
      filter += `&faixaIdadeInicial=${this.initialAge}`;
    }

    if (this.endAge !== '') {
      filter += `&faixaIdadeFinal=${this.endAge}`;
    }

    if (this.selectedGender !== '') {
      filter += `&sexo=${this.selectedGender}`;
    }

    return filter;
  }

  onClickNextPage() {
    const filter = `&pagina=${this.page + 1}${this.getFilter()}`
    this.page += 1;
    this.getPeople(filter);
  }

  onClickPreviousPage() {
    const filter = `&pagina=${this.page - 1}${this.getFilter()}`;
    this.page += -1;
    this.getPeople(filter);
  }
}
