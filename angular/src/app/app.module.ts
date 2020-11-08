import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { BlockCardsComponent } from './block-cards/block-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    JumboComponent,
    NavBarComponent,
    CarruselComponent,
    FooterComponent,
    BlockCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
