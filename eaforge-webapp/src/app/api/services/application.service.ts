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

import { ApplicationEntity } from '../models/application-entity';


@Injectable()
export class ApplicationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   */
  ApiApplicationsGetResponse(): Observable<HttpResponse<ApplicationEntity[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/applications`,
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
        let _body: ApplicationEntity[] = null;
        _body = _resp.body as ApplicationEntity[]
        return _resp.clone({body: _body}) as HttpResponse<ApplicationEntity[]>;
      })
    );
  }

  /**
   */
  ApiApplicationsGet(): Observable<ApplicationEntity[]> {
    return this.ApiApplicationsGetResponse().pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param application - undefined
   */
  ApiApplicationsPostResponse(application?: ApplicationEntity): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = application;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/applications`,
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
   * @param application - undefined
   */
  ApiApplicationsPost(application?: ApplicationEntity): Observable<void> {
    return this.ApiApplicationsPostResponse(application).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiApplicationsByIdGetResponse(id: number): Observable<HttpResponse<ApplicationEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/applications/${id}`,
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
        let _body: ApplicationEntity = null;
        _body = _resp.body as ApplicationEntity
        return _resp.clone({body: _body}) as HttpResponse<ApplicationEntity>;
      })
    );
  }

  /**
   * @param id - undefined
   */
  ApiApplicationsByIdGet(id: number): Observable<ApplicationEntity> {
    return this.ApiApplicationsByIdGetResponse(id).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   * @param application - undefined
   */
  ApiApplicationsByIdPutResponse(params: ApplicationService.ApiApplicationsByIdPutParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    __body = params.application;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/applications/${params.id}`,
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
   * @param application - undefined
   */
  ApiApplicationsByIdPut(params: ApplicationService.ApiApplicationsByIdPutParams): Observable<void> {
    return this.ApiApplicationsByIdPutResponse(params).pipe(
      map(_r => _r.body)
    );
  }
  /**
   * @param id - undefined
   */
  ApiApplicationsByIdDeleteResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/applications/${id}`,
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
  ApiApplicationsByIdDelete(id: number): Observable<void> {
    return this.ApiApplicationsByIdDeleteResponse(id).pipe(
      map(_r => _r.body)
    );
  }}

export module ApplicationService {
  export interface ApiApplicationsByIdPutParams {
    id: number;
    application?: ApplicationEntity;
  }
}
