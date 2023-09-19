import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Diretor } from '../../models/diretor';
import { delay, first, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private readonly API = 'api/diretor';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Diretor[]>(this.API)
      .pipe(
        first(),
        tap(diretor => console.log(diretor))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Diretor>(`${this.API}/${id}`);
  }

  save(record: Partial<Diretor>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Diretor>) {
    return this.httpClient.post<Diretor>(this.API, record).pipe(first());
  }

  private update(record: Partial<Diretor>) {
    return this.httpClient.put<Diretor>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
