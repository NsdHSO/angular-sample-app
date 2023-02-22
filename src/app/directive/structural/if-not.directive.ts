import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true
})
export class IfNotDirective {

  @Input() set appIfNot(value: boolean){
      if(value){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }else {
        this.viewContainerRef.clear()
      }
  }

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef){
  }

}
