import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Ejemplo 2';

  description = 'Interactuando con propiedades';

  EquiposDeFutbol = ['América de Cali', 'Atlético Nacional', 'Millonarios', 'Santa Fe', 'Deportivo Cali', 'Junior', 'Independiente Medellín', 'Once Caldas', 'Deportes Tolima', 'Boyacá Chicó', 'Deportivo Pasto', 'La Equidad', 'Atlético Bucaramanga', 'Atlético Huila'];

}
