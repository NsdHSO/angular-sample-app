import {
  Component, Inject
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  APP_CONFIG, IConfig
} from "../../service/Greeter";

@Component({
  selector: 'app-border-large',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './border-large.component.html',
  styleUrls: [ './border-large.component.scss' ]
})
export class BorderLargeComponent {

  constructor(@Inject(APP_CONFIG) private config: IConfig){
  }

  ngOnInit(){
    console.log(this.config.canDeleteItems)
  }
}
