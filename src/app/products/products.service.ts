import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';


import { IProduct } from './product';

// Makes service available to entire application.
@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]>{

        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        // In a real word app, we send the server to some remote logging infrastructure
        // Instead of just logging it to the console.

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it acccordingly.
            errorMessage = 'An error occured: ${err.error.message}';
        } else{
            // The backend returned an unsuccessful response code.
            // The reponse body may contain clues as to what went wrong.
            errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}
