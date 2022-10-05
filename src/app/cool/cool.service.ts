import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { CoolItem, SpotPrice } from './cool-item';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CoolService {
  private spotPriceUrl =
    'https://www.vattenfall.se/api/price/spot/pricearea/2022-10-05/2022-10-05/SN3'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':
        'https://ng2-line-chart-qpl7yj.stackblitz.io',
    }),
  };

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getData(): Observable<SpotPrice[]> {
    return this.http.get<SpotPrice[]>(this.spotPriceUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<SpotPrice[]>('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
