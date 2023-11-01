import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from '../../model/video.model';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {
  public videoList: Video[] = [];
  public isGrid: boolean = true;

  constructor(private videoService: VideoService){}
  ngOnInit(): void {
    this.getVideoList();
  }

  getVideoList() {
    this.videoService.getVideoList().subscribe(res => {
      this.videoList = res;
    })
  }

  toggleView(viewType: boolean) {
    this.isGrid = viewType;
  }
}
