import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = 'Fabio';
  apellido: string = 'Tovio';
  private edad: number = 30;

  getEdad(): string {
    return `Tienes ${this.edad} años`;
  }

}
