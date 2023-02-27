import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SomethingService
} from "../../Greeter";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GalleryStateModule {

  static forRoot(config: SomethingService): ModuleWithProviders<any>{
    return {
      ngModule: GalleryStateModule,
      providers:[
        {provide: SomethingService, useValue:config}
      ]
    }
  }

}
