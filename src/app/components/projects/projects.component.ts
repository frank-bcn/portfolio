import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { VideoPlayService } from '../../services/video-play.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  showMore = false;

  constructor(public dm: DarkModeService, public vp: VideoPlayService) {}

  /*
   * toggleProjects: Toggles the visibility of additional projects and starts the video playback.
   * - Changes the value of `showMore` to its opposite (true to false, or false to true).
   * - Calls the `startVideo()` method to start playing the video if `showMore` is true.
   */
  toggleProjects() {
    this.showMore = !this.showMore;
    this.startVideo();
  }

  /*
   * startVideo: Starts the playback of a video selected by a CSS selector.
   * - Mutes the video, sets it to autoplay, and enables loop playback.
   * - Attempts to play the video and handles any errors silently if playback fails.
   * - If the video element is not found, no action is taken.
   *
   * @param selector - A CSS selector used to find the video element in the DOM.
   *                  For example, '#bot' to select the video with the ID 'bot'.
   */
  startVideo(): void {
    setTimeout(() => {
      if (this.showMore) {
        this.vp.startVideo('#bot');
      }
    }, 0);
  }
}