import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";


@Injectable()
export class ConfigInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Ajouter des en-têtes spécifiques pour les URL spécifiques
    if (request.url.includes("chat_bot")) {
      request = this.cloneRequestWithHeaders(request, {
        'Access-Control-Allow-Origin': '*'
      });
    } else if (request.url.includes('api/v1/aaaadmin/listAll')) {
      request = this.cloneRequestWithHeaders(request, {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      });
    } else {
      request = this.cloneRequestWithHeaders(request, {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Traiter les réponses HTTP ici si nécessaire
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private cloneRequestWithHeaders(request: HttpRequest<any>, headers: {[key: string]: string}): HttpRequest<any> {
    let clonedRequest = request;
    Object.keys(headers).forEach(key => {
      clonedRequest = clonedRequest.clone({
        headers: clonedRequest.headers.set(key, headers[key])
      });
    });
    return clonedRequest;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const data = {
      reason: (error.error ? error.error : '') + ' - ' + (error.message ? error.message : ''),
      status: error.status
    };
    // Gérer les erreurs spécifiques ici
    return throwError(() => error);
  }
}
