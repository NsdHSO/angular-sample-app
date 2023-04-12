import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from "@angular/forms";

@Pipe({
  name: 'getFromC',
  standalone: true
})
export class GetFromCPipe implements PipeTransform {

  transform<T>(value: unknown, ...args: unknown[]): FormControl<T>{
    return value as unknown as FormControl<T>;
  }

}
