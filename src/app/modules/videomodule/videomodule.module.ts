import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideomoduleRoutingModule } from './videomodule-routing.module';
import { VideolistComponent } from './components/videolist/videolist.component';
import { VideodetailsComponent } from './components/videodetails/videodetails.component';
import { VideoService } from 'src/app/services/video.service';
import { GridviewComponent } from './components/videolist/gridview/gridview.component';
import { ListviewComponent } from './components/videolist/listview/listview.component';


@NgModule({
  declarations: [
    VideolistComponent,
    VideodetailsComponent,
    GridviewComponent,
    ListviewComponent
  ],
  imports: [
    CommonModule,
    VideomoduleRoutingModule
  ],
  providers: [
    VideoService
  ]
})
export class VideomoduleModule { }
