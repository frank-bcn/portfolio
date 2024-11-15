import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayService {
  constructor() {}

  startVideo(selector: string): void {
    const video = document.querySelector<HTMLVideoElement>(selector);
  
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
  
      video.play().catch((error) => {
        console.error('Video konnte nicht abgespielt werden:', error);
      });
    } else {
      console.error(`Video mit dem Selektor "${selector}" wurde nicht gefunden.`);
    }
  }
}
