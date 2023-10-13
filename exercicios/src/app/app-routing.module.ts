import { SegundoExercicioImperativoComponent } from './segundo-exercicio-imperativo/segundo-exercicio-imperativo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroExercicioComponent } from './primeiro-exercicio/primeiro-exercicio.component';
import { SegundoExercicioFuncionalComponent } from './segundo-exercicio-funcional/segundo-exercicio-funcional.component';
import { TerceiroExercicioComponent } from './terceiro-exercicio/terceiro-exercicio.component';

const routes: Routes = [
  { path: 'primeiro-exercicio', component: PrimeiroExercicioComponent},
  { path: 'segundo-exercicio-funcional', component: SegundoExercicioFuncionalComponent},
  { path: 'segundo-exercicio-imperativo', component: SegundoExercicioImperativoComponent},
  { path: 'terceiro-exercicio', component: TerceiroExercicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
