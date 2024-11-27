import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoPlayService {
  constructor() {}

  /*
   * startVideo: Initializes and plays a video element selected by a CSS selector.
   * It ensures the video is muted, set to autoplay, loops continuously, and starts playback.
   * If the video cannot be found or playback fails, the method handles these cases gracefully.
   *
   * @param selector - A CSS selector string used to locate the video element in the DOM.
   */
  startVideo(selector: string): void {
    const video = document.querySelector<HTMLVideoElement>(selector);

    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;

      video.play().catch((error) => {});
    } else {
    }
  }
}