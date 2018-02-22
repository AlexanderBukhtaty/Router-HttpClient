import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ResolveService implements Resolve<number[]> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<number[]> {
    return new Promise<number[]>((resolve) => {
      console.log('resolver');
      setTimeout(() => resolve([1, 2, 3, 4, 5]), 2000);
    });
  }
}
