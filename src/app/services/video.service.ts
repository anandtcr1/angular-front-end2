import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../modules/videomodule/model/video.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  getVideoList() {
    return this.httpClient.get<Video[]>(`${this.apiUrl}/videos`).pipe();
  }

  getVideo(id?: string) {
    return this.httpClient.get<Video>(`${this.apiUrl}/videos/${id}`).pipe();
  }
}
