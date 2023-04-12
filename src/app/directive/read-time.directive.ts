import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number
}

@Directive({
  selector: '[appReadTime]',
  standalone: true
})
export class ReadTimeDirective implements OnInit {

  @Input() config: ReadTimeConfig = {
    wordsPerMinute: 70
  }

  @Output() readTimeCalculated = new EventEmitter<string>()

  constructor(private readonly _element: ElementRef){
  }

  ngOnInit(): void{
    const text = this._element.nativeElement.textContent;
    const time = this.calculateReadTime(text)
    const timeStr = this.createTimeString(time)
    this.readTimeCalculated.emit(timeStr)
  }

  calculateReadTime(text: string){
    const wordCount = text.split(/\s+/g).length
    const minutes = wordCount /this.config.wordsPerMinute;

    return Math.trunc(minutes)
  }
  createTimeString(timeString: number){
    if ( timeString === 1 ){
      return '1 minute';
    }else if ( timeString < 1 ){
      return ' < 1 minute';
    }else{
      return `${timeString} minutes`;
    }
  }
}
