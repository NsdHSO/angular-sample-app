import {
  Component, Inject
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  APP_CONFIG, IConfig
} from "../../service/Greeter";
import {
  FormBuilder, FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, Validators
} from "@angular/forms";
import { AppModule } from "../../app.module";
import { GetFromCPipe } from "../../pipes/get-from-c.pipe";

@Component({
  selector: 'app-border-large',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule,
    GetFromCPipe ],
  templateUrl: './border-large.component.html',
  styleUrls: [ './border-large.component.scss' ]
})
export class BorderLargeComponent {
  driverForm: FormGroup
  constructor(@Inject(APP_CONFIG) private config: IConfig, private readonly _formBuilder: FormBuilder){
    this.driverForm = _formBuilder.group({
      name: new FormControl('', [Validators.required]),
      age: 0
    })
  }

  ngOnInit(){
    console.log(this.config.canDeleteItems)
  }

  save($event: FormGroup){
    console.log($event.value)
  }
}
