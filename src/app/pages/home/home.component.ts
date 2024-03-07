import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { CardComponent } from '../../components/card/card.component';
import { ApiSearchPersonService } from '../../services/api-search-person.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, CardComponent],
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
    this.apiSearch.getPeople().subscribe((response: any) => {
      this.listOfPeople = response?.content;
    })
  }
}
