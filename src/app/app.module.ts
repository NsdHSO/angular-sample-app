import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from "./module/gallery/gallery.component";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "./directive/highlight.directive";
import { ReadTimeDirective } from "./directive/read-time.directive";
import { IfNotDirective } from "./directive/structural/if-not.directive";
import { DelayRenderDirective } from "./directive/structural/delay-render.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryComponent,
    FormsModule,
    HighlightDirective,
    ReadTimeDirective,
    IfNotDirective,
    DelayRenderDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
