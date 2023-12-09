import { SegundoExercicioImperativoComponent } from './segundo-exercicio-imperativo/segundo-exercicio-imperativo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrimeiroExercicioComponent } from './primeiro-exercicio/primeiro-exercicio.component';
import { FormsModule } from '@angular/forms';
import { SegundoExercicioFuncionalComponent } from './segundo-exercicio-funcional/segundo-exercicio-funcional.component';
import { TerceiroExercicioComponent } from './terceiro-exercicio/terceiro-exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroExercicioComponent,
    SegundoExercicioFuncionalComponent,
    SegundoExercicioImperativoComponent,
    TerceiroExercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
