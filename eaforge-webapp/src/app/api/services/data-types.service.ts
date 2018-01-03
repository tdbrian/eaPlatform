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

import { DataTypesEntity } from '../models/data-types-entity';


@Injectable()
export class DataTypesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   */
  ApiDataTypesGetResponse(): Observable<HttpResponse<DataTypesEntity[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/dataTypes`,
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
        let _body: DataTypesEntity[] = null;
        _body = _resp.body as DataTypesEntity[]
        return _resp.clone({body: _body}) as HttpResponse<DataTypesEntity[]>;
      })
    );
  }

  /**
   */
  ApiDataTypesGet(): Observable<DataTypesEntity[]> {
    return this.ApiDataTypesGetResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param dataType - undefined
   */
  ApiDataTypesPostResponse(dataType?: DataTypesEntity): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = dataType;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/dataTypes`,
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
   * @param dataType - undefined
   */
  ApiDataTypesPost(dataType?: DataTypesEntity): Observable<void> {
    return this.ApiDataTypesPostResponse(dataType).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiDataTypesByIdGetResponse(id: number): Observable<HttpResponse<DataTypesEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/dataTypes/${id}`,
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
        let _body: DataTypesEntity = null;
        _body = _resp.body as DataTypesEntity
        return _resp.clone({body: _body}) as HttpResponse<DataTypesEntity>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  ApiDataTypesByIdGet(id: number): Observable<DataTypesEntity> {
    return this.ApiDataTypesByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   * @param dataType - undefined
   */
  ApiDataTypesByIdPutResponse(params: DataTypesService.ApiDataTypesByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.dataType;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/dataTypes/${params.id}`,
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
   * @param dataType - undefined
   */
  ApiDataTypesByIdPut(params: DataTypesService.ApiDataTypesByIdPutParams): Observable<void> {
    return this.ApiDataTypesByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiDataTypesByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/dataTypes/${id}`,
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
  ApiDataTypesByIdDelete(id: number): Observable<void> {
    return this.ApiDataTypesByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }}

export module DataTypesService {
  export interface ApiDataTypesByIdPutParams {
    id: number;
    dataType?: DataTypesEntity;
  }
}
