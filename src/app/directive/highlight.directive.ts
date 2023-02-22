import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges{

  @Input() highlightText = ''
  @Input() highlightColor = ''
  originalHTML = '';
  constructor(private readonly _elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void{
    if(changes['highlightText'].firstChange){
      this.originalHTML = this._elementRef.nativeElement.innerHTML
      return
    }
    const {currentValue} = changes['highlightText']
    if(currentValue)
    {
      const regExp = new RegExp(`(${currentValue})`, 'ig')
      this._elementRef.nativeElement.innerHTML = this.originalHTML.replace(
        regExp,         `<span style="background-color: ${this.highlightColor}">\$1</span>`

      )
    }
    else{
      this._elementRef.nativeElement.innerHTML = this.originalHTML
    }
  }

}
