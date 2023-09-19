import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Classe } from '../../models/classe';
import { delay, first, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private readonly API = 'api/classe';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Classe[]>(this.API)
      .pipe(
        first(),
        tap(classe => console.log(classe))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Classe>(`${this.API}/${id}`);
  }

  save(record: Partial<Classe>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Classe>) {
    return this.httpClient.post<Classe>(this.API, record).pipe(first());
  }

  private update(record: Partial<Classe>) {
    return this.httpClient.put<Classe>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
