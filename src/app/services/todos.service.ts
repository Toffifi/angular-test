import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      MyCustomHeader: Math.random().toString()
    });
    return this.http.post<Todo>('http://jsonplaceholder.typicode.com/todos', todo, {headers});
  }

  fetchTodos(): Observable<Todo[]> {
    // let params = new HttpParams();
    // params = params.append('_limit', '4');
    // params = params.append('custom', 'anything');

    return this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/todos', {
      params: new HttpParams().set('_limit', '3'),
      observe: 'response'
    })
      .pipe(
        map(response => {
          console.log('response', response);
          return response.body;
        }),
        delay(500),
        catchError(error => {
          console.log('Error', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete<void>(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    })
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) {
            console.log('Send');
          } else if (event.type === HttpEventType.Response) {
            console.log('Response');
          }
        })
      );
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`http://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}
