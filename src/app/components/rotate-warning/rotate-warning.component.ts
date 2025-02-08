import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { RotateWarningService } from '../../services/rotate-warning.service';

@Component({
  selector: 'app-rotate-warning',
  templateUrl: './rotate-warning.component.html',
  styleUrl: './rotate-warning.component.scss',
})
export class RotateWarningComponent {
  constructor(public ss: ScrollService, public rw: RotateWarningService) {}

}