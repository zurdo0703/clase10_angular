import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

Materias = ['', 'Lengua Castellana', 'Ingles', 'Frances', 'Matematicas', 'Diseño', 'Desarrollo', 'PHP', 'JS', 'HTML5', 'Angular', 'Ciencias Sociales', 'Servidores'];

}
