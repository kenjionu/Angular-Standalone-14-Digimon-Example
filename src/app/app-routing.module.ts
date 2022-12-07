import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonListComponent } from './digimon-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'list', component: DigimonListComponent},
  { path: 'details/:id', loadComponent: () => import('./digimon-view.component').then(m => m.DigimonViewComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
