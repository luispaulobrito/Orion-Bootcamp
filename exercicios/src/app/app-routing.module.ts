import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroExercicioComponent } from './primeiro-exercicio/primeiro-exercicio.component';
import { SegundoExercicioComponent } from './segundo-exercicio/segundo-exercicio.component';

const routes: Routes = [
  { path: 'primeiro-exercicio', component: PrimeiroExercicioComponent},
  { path: 'segundo-exercicio', component: SegundoExercicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
