/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';



@Injectable()
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   */
  ApiUsersGetResponse(): Observable<HttpResponse<string[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: string[] = null;
        _body = _resp.body as string[]
        return _resp.clone({body: _body}) as HttpResponse<string[]>;
      })
    );
  }

  /**
   */
  ApiUsersGet(): Observable<string[]> {
    return this.ApiUsersGetResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param value - undefined
   */
  ApiUsersPostResponse(value?: string): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param value - undefined
   */
  ApiUsersPost(value?: string): Observable<void> {
    return this.ApiUsersPostResponse(value).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiUsersByIdGetResponse(id: number): Observable<HttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: string = null;
        _body = _resp.body as string
        return _resp.clone({body: _body}) as HttpResponse<string>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  ApiUsersByIdGet(id: number): Observable<string> {
    return this.ApiUsersByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   * @param value - undefined
   */
  ApiUsersByIdPutResponse(params: UsersService.ApiUsersByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.value;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - undefined
   * @param value - undefined
   */
  ApiUsersByIdPut(params: UsersService.ApiUsersByIdPutParams): Observable<void> {
    return this.ApiUsersByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiUsersByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  ApiUsersByIdDelete(id: number): Observable<void> {
    return this.ApiUsersByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param email - undefined
   */
  EmailByEmailGetResponse(email: string): Observable<HttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/email/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: string = null;
        _body = _resp.body as string
        return _resp.clone({body: _body}) as HttpResponse<string>;
      })
    );
  }

  /**
   * @param email - undefined
   */
  EmailByEmailGet(email: string): Observable<string> {
    return this.EmailByEmailGetResponse(email).pipe(
      map(_r => _r.body)
    );
  }}

export module UsersService {
  export interface ApiUsersByIdPutParams {
    id: number;
    value?: string;
  }
}
