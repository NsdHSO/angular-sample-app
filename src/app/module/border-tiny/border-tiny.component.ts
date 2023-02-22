import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-border-tiny',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './border-tiny.component.html',
  styleUrls: ['./border-tiny.component.scss']
})
export class BorderTinyComponent {
  @Input() name: string;

  constructor(){
  }
}
