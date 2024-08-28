import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/ images/certificates/THM-TJI8C28XQG.png',
    'assets/ images/certificates/THM-ECM9Q6VRUU.png',
  ];
  currentIndex: number = 0;
  touchStartX = 0;
  touchEndX = 0;

  /*
   * Initializes component and sets up event listeners.
   * Binds touchstart and touchend events to their respective handler functions.
   * Uses passive event listeners to improve performance by indicating that the event does not cancel scrolling.
   */
  ngOnInit() {
    window.addEventListener('touchstart', this.touchStart.bind(this), {
      passive: true,
    });
    window.addEventListener('touchend', this.touchEnd.bind(this), {
      passive: true,
    });
  }

  /*
   * Cleans up event listeners before the component is destroyed.
   * Removes the touchstart and touchend event listeners that were previously added during initialization.
   * Prevents potential memory leaks by ensuring that the event listeners are properly unbound.
   */
  ngOnDestroy() {
    window.removeEventListener('touchstart', this.touchStart.bind(this));
    window.removeEventListener('touchend', this.touchEnd.bind(this));
  }

  /*
   * Captures the starting position of a touch event.
   * Records the horizontal screen coordinate (X) of the first touch point when the touchstart event is triggered.
   * Stores the touch position for later use in determining touch gestures.
   */
  touchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  /*
   * Captures the ending position of a touch event.
   * Records the horizontal screen coordinate (X) of the first touch point when the touchend event is triggered.
   * Calls the swipe method to evaluate the touch gesture based on the start and end positions.
   */
  touchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.swipe();
  }

  /*
   * Evaluates the swipe gesture based on touch start and end positions.
   * Determines the direction of the swipe by comparing the start and end X coordinates.
   * If the swipe distance exceeds the defined threshold, it triggers the next or previous slide accordingly.
   */
  swipe() {
    const swipeThreshold = 50;

    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      this.nextSlide();
    }

    if (this.touchEndX > this.touchStartX + swipeThreshold) {
      this.prevSlide();
    }
  }

  /*
   * Advances to the next slide in the image carousel.
   * Increments the current index if it is not the last slide; otherwise, loops back to the first slide.
   * Ensures continuous navigation through the slides by resetting the index when the end is reached.
   */
  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  /*
   * Reverts to the previous slide in the image carousel.
   * Decrements the current index if it is not the first slide; otherwise, loops back to the last slide.
   * Ensures continuous navigation through the slides by resetting the index when the start is reached.
   */
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  /*
   * Changes to a specific slide in the image carousel.
   * Sets the current index to the provided index value, allowing direct navigation to the specified slide.
   * Ensures that the carousel displays the slide corresponding to the given index.
   */
  slide(index: number) {
    this.currentIndex = index;
  }
}