import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideolistComponent } from './components/videolist/videolist.component';
import { ContainerComponent } from 'src/app/container/container.component';
import { VideodetailsComponent } from './components/videodetails/videodetails.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'list',
        component:VideolistComponent
      },
      {
        path: 'details/:id',
        component:VideodetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideomoduleRoutingModule { }
