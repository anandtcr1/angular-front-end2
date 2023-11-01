import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/homemodule/homemodule.module').then((m) => m.HomemoduleModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./modules/videomodule/videomodule.module').then((m) => m.VideomoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
