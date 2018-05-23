import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //not recommended
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filteredsStatus:string, prop: string): any {
    if(value.length==0 || filteredsStatus == "" ){
    return value;
    }
    let resultArray = [];
    for(let item of value)
    {
      if(filteredsStatus == item[prop]){
        resultArray.push(item);
      }
    }

    return null;
  }

}
