import { Component, AfterContentInit, ViewChild } from '@angular/core';
import Pokedex from 'src/assets/seed.json';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements AfterContentInit {
  @ViewChild('grid') grid: MatGridList;

  pokemons: object;
  
  gridByBreakpoint = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  constructor(private mediaObserver: MediaObserver) { }

  ngAfterContentInit() {
    this.pokemons = Pokedex;
    this.mediaObserver.media$.subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
