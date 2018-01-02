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
export class OrganizationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   */
  ApiOrganizationsGetResponse(): Observable<HttpResponse<string[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/organizations`,
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
  ApiOrganizationsGet(): Observable<string[]> {
    return this.ApiOrganizationsGetResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param value - undefined
   */
  ApiOrganizationsPostResponse(value?: string): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/organizations`,
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
  ApiOrganizationsPost(value?: string): Observable<void> {
    return this.ApiOrganizationsPostResponse(value).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiOrganizationsByIdGetResponse(id: number): Observable<HttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/organizations/${id}`,
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
  ApiOrganizationsByIdGet(id: number): Observable<string> {
    return this.ApiOrganizationsByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   * @param value - undefined
   */
  ApiOrganizationsByIdPutResponse(params: OrganizationsService.ApiOrganizationsByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.value;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/organizations/${params.id}`,
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
  ApiOrganizationsByIdPut(params: OrganizationsService.ApiOrganizationsByIdPutParams): Observable<void> {
    return this.ApiOrganizationsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiOrganizationsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/organizations/${id}`,
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
  ApiOrganizationsByIdDelete(id: number): Observable<void> {
    return this.ApiOrganizationsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }}

export module OrganizationsService {
  export interface ApiOrganizationsByIdPutParams {
    id: number;
    value?: string;
  }
}
