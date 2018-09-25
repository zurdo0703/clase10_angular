import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit {

	NombreJugador: string = 'Ronaldinho';
	Edad: number;
	Equipos:{
		Pais: string;
		NombreEquipo: string;
		ValorContraro: number;
	}
	Cualidades: string[];

	constructor() {
		this.Edad = 36;
		this.Equipos = {
			Pais: 'Brasil',
			NombreEquipo: 'Gremio',
			ValorContraro: 35000
		};
		this.Cualidades = ['Magia', 'Regate', 'Sonrisa Eterna'];
	}

	ngOnInit() {
	}

	title: string = 'Ejemplo 3';

	description: string = 'Objetos';



}
