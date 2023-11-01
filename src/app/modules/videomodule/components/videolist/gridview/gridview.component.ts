import { Component, Input } from '@angular/core';
import { Video } from '../../../model/video.model';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent {
  @Input() videoList: Video[] | undefined;



  // viewVideoDetails(id: string) {
  //   this.router.navigate(['/parent/child',{info: "optional"}]);
  // }
}
