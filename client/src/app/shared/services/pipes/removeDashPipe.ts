import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'removeUnderscoreAndStartWithUpperCase'})
export class RemoveDashPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
  }
}
