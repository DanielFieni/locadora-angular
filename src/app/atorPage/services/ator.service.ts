import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ator } from '../../models/ator';
import { delay, first, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AtorService {

  private readonly API = 'api/ator';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Ator[]>(this.API)
      .pipe(
        first(),
        tap(ator => console.log(ator))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Ator>(`${this.API}/${id}`);
  }

  save(record: Partial<Ator>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Ator>) {
    return this.httpClient.post<Ator>(this.API, record).pipe(first());
  }

  private update(record: Partial<Ator>) {
    return this.httpClient.put<Ator>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
