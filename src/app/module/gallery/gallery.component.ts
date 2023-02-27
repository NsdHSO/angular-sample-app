import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges, OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BorderTinyComponent
} from "../border-tiny/border-tiny.component";
import {
  BorderLargeComponent
} from "../border-large/border-large.component";
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { SomethingService } from "../../service/Greeter";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.scss' ]
})
export class GalleryComponent implements OnChanges,OnDestroy {

  @Input() typeBorder: string = 'tiny';
  pictures = new Set()
  @ViewChild(
    'borderStyle',
    { read: ViewContainerRef }) borderStyle: ViewContainerRef
  private readonly destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    public readonly _someService: SomethingService
  ){
  }

  ngOnChanges(changes: SimpleChanges): void{
    if ( changes[ 'typeBorder' ].currentValue !== undefined ) {
      console.log(this.typeBorder)
      this._loadDynamicComponent(this.typeBorder)
    }
    this.native()
  }

  generateRandom(): number{
    return Math.trunc(Math.random() * 10)
  }

  deleteFirstElement(){
    [ ...this.pictures.values() ].forEach((
      value,
      index) => {
      if ( index === 0 ) {
        this.pictures.delete(value)
      }
    })
  }

  addQueryInRoute(){
    const queryParams: Params = { name: 'ion', i: 'sami' }
    this._someService.displayName()
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams,
      queryParamsHandling: 'merge'
    })
  }

  native(){
    this._activatedRoute.queryParams.pipe(takeUntil(this.destroy$)).subscribe( query => {
      console.log(query)
      if(JSON.stringify(query) === '{}'){
        console.log('empty')
      }else{
        console.log('query has something')
      }
    })
    console.log(this._someService.street)
    this._someService.displayName()
  }

  private _loadDynamicComponent(currentValue: string){
    let component: any;
    switch ( currentValue ) {
      case 'tiny':
        component = BorderTinyComponent
        break;
      case 'large':
        component = BorderLargeComponent
        break;
    }

    // const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
    //   component);
    // setTimeout(() => {
    //   this.borderStyle.createComponent(componentFactory)
    // })
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.complete()
  }
}
