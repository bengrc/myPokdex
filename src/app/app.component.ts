import { Component, OnInit } from '@angular/core';
import Pokedex from '../assets/seed.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myPokedex';
  pokemons = Pokedex;

  ngOnInit() {
    console.log(this.pokemons);
  }
}
