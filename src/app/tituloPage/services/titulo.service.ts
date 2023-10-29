import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Titulo } from '../../models/titulo';
import { first, tap } from 'rxjs/operators';
import { Ator } from 'src/app/models/ator';

@Injectable({
  providedIn: 'root'
})

export class TituloService {

  private readonly API = 'api/titulo';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Titulo[]>(this.API)
      .pipe(
        first(),
        tap(titulo => console.log(titulo))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Titulo>(`${this.API}/${id}`);
  }

  save(record: Partial<Titulo>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Titulo>) {
    return this.httpClient.post<Titulo>(this.API, record).pipe(first());
  }

  private update(record: Partial<Titulo>) {
    return this.httpClient.put<Titulo>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
