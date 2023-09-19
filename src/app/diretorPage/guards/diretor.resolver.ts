import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Diretor } from '../../models/diretor';
import { DiretorService } from '../services/diretor.service';

@Injectable({
  providedIn: 'root'
})
export class DiretorResolver implements Resolve<Diretor> {

  constructor(private service: DiretorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Diretor> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: '', nome: ''});
  }
}
