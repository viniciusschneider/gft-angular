import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create-client',
    loadChildren: () => import('./pages/create-client/create-client.module').then(m => m.CreateClientModule),
  },
  {
    path: '**',
    redirectTo: 'create-client',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
