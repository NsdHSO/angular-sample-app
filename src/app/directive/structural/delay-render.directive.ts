import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class DelayContext {
  constructor(private loadTime: number){
  }
}

@Directive({
  selector: '[appDelayRender]',
  standalone: true
})
export class DelayRenderDirective {

  @Input('appDelayRender') set appDelay(time: number){
    setTimeout(() => {
      this._viewContainerRef.createEmbeddedView(
        this._templateRef,
        new DelayContext(performance.now()))
    }, time)
  }

  constructor(
    private readonly _templateRef: TemplateRef<DelayContext>,
    private _viewContainerRef: ViewContainerRef){
  }

}
