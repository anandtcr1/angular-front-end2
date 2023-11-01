import { Component, Input } from '@angular/core';
import { Video } from '../../../model/video.model';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent {
  @Input() videoList: Video[] | undefined;
}
