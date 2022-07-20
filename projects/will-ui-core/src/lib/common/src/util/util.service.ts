import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  getID(): string {
    return new Date()
      .getTime()
      .toString()
      .split('')
      .map((element: string) => element === '0' ? 'a' : element)
      .join()
    ;
  }
}
