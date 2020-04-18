import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../moduls/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  path="web-api-servis alanı";//back kısmına istek yapıyoruz

  constructor(  private httpClient:HttpClient){ }

  GetBook():Observable<Book[]>
  {
    return this.httpClient.get<Book[]>(this.path);
  }
}
