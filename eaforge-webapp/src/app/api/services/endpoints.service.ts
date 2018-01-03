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

import { EndpointEntity } from '../models/endpoint-entity';


@Injectable()
export class EndpointsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id - undefined
   */
  ApiEndpointsApplicationByIdGetResponse(id: number): Observable<HttpResponse<EndpointEntity[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/endpoints/application/${id}`,
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
        let _body: EndpointEntity[] = null;
        _body = _resp.body as EndpointEntity[]
        return _resp.clone({body: _body}) as HttpResponse<EndpointEntity[]>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  ApiEndpointsApplicationByIdGet(id: number): Observable<EndpointEntity[]> {
    return this.ApiEndpointsApplicationByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiEndpointsByIdGetResponse(id: number): Observable<HttpResponse<EndpointEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/endpoints/${id}`,
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
        let _body: EndpointEntity = null;
        _body = _resp.body as EndpointEntity
        return _resp.clone({body: _body}) as HttpResponse<EndpointEntity>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  ApiEndpointsByIdGet(id: number): Observable<EndpointEntity> {
    return this.ApiEndpointsByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   * @param endpoint - undefined
   */
  ApiEndpointsByIdPutResponse(params: EndpointsService.ApiEndpointsByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.endpoint;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/endpoints/${params.id}`,
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
   * @param endpoint - undefined
   */
  ApiEndpointsByIdPut(params: EndpointsService.ApiEndpointsByIdPutParams): Observable<void> {
    return this.ApiEndpointsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiEndpointsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/endpoints/${id}`,
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
  ApiEndpointsByIdDelete(id: number): Observable<void> {
    return this.ApiEndpointsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param endpoint - undefined
   */
  ApiEndpointsPostResponse(endpoint?: EndpointEntity): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = endpoint;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/endpoints`,
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
   * @param endpoint - undefined
   */
  ApiEndpointsPost(endpoint?: EndpointEntity): Observable<void> {
    return this.ApiEndpointsPostResponse(endpoint).pipe(
      map(_r => _r.body)
    );
  }}

export module EndpointsService {
  export interface ApiEndpointsByIdPutParams {
    id: number;
    endpoint?: EndpointEntity;
  }
}
