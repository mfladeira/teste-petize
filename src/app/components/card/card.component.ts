import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Person } from '../../interfaces/Person';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() person!: Person;
}
