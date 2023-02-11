import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {remoteRoutes} from './entry.routes';
import {FrameWholeModule} from "ngx-liburg-frame-side";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), FrameWholeModule],
  providers: [],
})
export class RemoteEntryModule {}
