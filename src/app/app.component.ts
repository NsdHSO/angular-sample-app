import {
  Component,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  GalleryComponent
} from "./module/gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'sampleApp';

  @ViewChild(GalleryComponent) gallery: ViewChildren | any;
  searchText: string = '';
  readTime: string = ''
  myTrack: any;

  address = {
    nameStreet: 'Ion',
    number: 21,
    postal: {
      code: 'sdads',
      country: 'Roumania'
    }
  }

  constructor(){
  }

  removeFirstNumber(gallery: GalleryComponent){
    this.gallery.deleteFirstElement()
  }

  addRandomNumber(gallery: GalleryComponent){
    this.gallery.pictures.add(this.gallery.generateRandom())
    console.log(this.gallery.pictures)
  }

  onReadTimeCalculated(readTime: string){
    if ( readTime !== undefined ) {
      this.readTime = readTime
    }
  }

  trigger(myTrack: any){
    console.log(myTrack)
  }

  addQuery(gallery: GalleryComponent){
    gallery.addQueryInRoute()
  }
}
