import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'Sin Persona';
  titulo = '';

  agregarPersona(): void {
    this.mensaje = 'Persona Agregada';
  }

  modificarTitulo(event: Event) {
    //target es el elemento que se esta ejecutando en el momento
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
