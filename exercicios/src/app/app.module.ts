import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroExercicioComponent } from './primeiro-exercicio/primeiro-exercicio.component';
import { FormsModule } from '@angular/forms';
import { SegundoExercicioComponent } from './segundo-exercicio/segundo-exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroExercicioComponent,
    SegundoExercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
