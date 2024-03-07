import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { CardComponent } from '../../components/card/card.component';
import { ApiSearchPersonService } from '../../services/api-search-person.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, CardComponent, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nameInput = "";
  initialAge = "";
  endAge = "";
  selectedGender = 'empty';
  listOfPeople = [];

  constructor(private apiSearch: ApiSearchPersonService) { }

  ngOnInit() {
    // this.apiSearch.getPeople('').subscribe((response: any) => {
    //   this.listOfPeople = response.content;
    // })
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

  search() {
    const filter = this.getFilter();
    this.apiSearch.getPeople(filter).subscribe((response: any) => {
      this.listOfPeople = response?.content;
    })
  }

  getFilter(){
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
}
