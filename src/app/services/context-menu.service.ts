import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {

  constructor() {}
  preventContextMenu(event: MouseEvent) {
    event.preventDefault();
  }
}