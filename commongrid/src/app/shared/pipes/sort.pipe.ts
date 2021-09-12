import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any, fieldName: string,
                   order: string = 'asc'): any[] {
    items = items || [];
    if(!items || !fieldName){
      return items;
    }

    return items.slice.sort(function compare(left:any, right:any){
      const ORDER: number = order == 'desc'? -1 : 1;
      if(left[fieldName] < right[fieldName]){
        return -ORDER;
      }
      if(left[fieldName] > right[fieldName]){
        return ORDER;
      }
      
       return 0;
    });
  }

}
