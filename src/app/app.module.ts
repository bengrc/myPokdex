import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Material modules */
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonFilterPipe } from './pokemon-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokedexComponent,
    PokemonFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, PokedexComponent]
})
export class AppModule { }
