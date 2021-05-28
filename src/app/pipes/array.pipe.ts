import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(externalArray: Array<any>, parameters: Array<string>): Array<any> {
    const field = parameters[0];
    const order = parameters[1];
    return externalArray.sort(this.orderArray(field, order));
    //! return externalArray.sort(this.orderArray(parameters[0], parameters[1]));
  }

  public orderArray(field: string, order = 'ASC'): any {
    //? This function return a lambda function
    return (arrayA: any, arrayB: any) => {

      if (!arrayA.hasOwnProperty(field)) {
        return 0;
      }
      let obj1 = arrayA[field];
      let obj2 = arrayB[field];
      const finalOrder = order.toUpperCase();

      if (typeof arrayA[field] === 'string') {
        obj1 = arrayA[field].toUpperCase();
        obj2 = arrayB[field].toUpperCase();
      }

      let result = 0;

      if (obj1 > obj2) { result = 1; }
      else if (obj1 < obj2) { result = - 1; }
      return finalOrder === 'ASC' ? result : result * -1;
    }
  }

}
