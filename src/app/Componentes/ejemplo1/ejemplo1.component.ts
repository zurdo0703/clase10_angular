import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Ejemplo 1';

  description = 'Interactuando con propiedades';

  CuerpoDeEjemplo = 'Acá se mostrara todo lo que yo quiera colocar!';

  PieDeEjemplo = 'Finalizado el Ejemplo';

  TheBests = ['Cristiano Ronaldo', 'Mohamed Salah', 'Luka Modric'];

}
