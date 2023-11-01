import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from '../../model/video.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: ['./videodetails.component.css']
})
export class VideodetailsComponent implements OnInit {
  @Input() id: string | undefined;
  
  constructor(private videoService: VideoService, 
              private _Activatedroute: ActivatedRoute,
              private location: Location) {
    this._Activatedroute.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      this.getVideo(id!);
  });
  }

  ngOnInit(): void {
    
  }
  public video?: Video;


  getVideo(id: string) {
    this.videoService.getVideo(id).subscribe(res => {
      this.video = res;
    })
  }

  back() {
    this.location.back();
  }
}
