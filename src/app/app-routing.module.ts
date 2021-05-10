import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app-b', pathMatch: 'full' },
  {
    path: 'app-b',
    loadChildren: () => import('./federated/federated.module').then(m => m.FederatedModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
