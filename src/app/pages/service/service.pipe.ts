import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'service',
  standalone: true
})
export class ServicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
