import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {

  constructor() {}

  /*
   * preventContextMenu: Prevents the default context menu from appearing on right-click.
   * This method is typically used to disable the browser's right-click context menu on certain elements.
   *
   * @param event - The MouseEvent triggered by the right-click action.
   */
  preventContextMenu(event: MouseEvent) {
    event.preventDefault();
  }
}