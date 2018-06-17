import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookPrice'
})
export class BookPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  }

}
