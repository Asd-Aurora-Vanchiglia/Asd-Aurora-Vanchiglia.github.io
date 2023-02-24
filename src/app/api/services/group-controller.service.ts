/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext, HttpRequest, HttpEventType, HttpEvent, HttpProgressEvent } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { GroupCreationDto } from '../models/group-creation-dto';
import { GroupViewDto } from '../models/group-view-dto';
import { ListWrapperGroupViewDto } from '../models/list-wrapper-group-view-dto';
import { EventType } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GroupControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll
   */
  static readonly GetAllPath = '/groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ListWrapperGroupViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupControllerService.GetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListWrapperGroupViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: {
  },
  context?: HttpContext

): Observable<ListWrapperGroupViewDto> {

    return this.getAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<ListWrapperGroupViewDto>) => r.body as ListWrapperGroupViewDto)
    );
  }

  /**
   * Path part for operation createGroup
   */
  static readonly CreateGroupPath = '/groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createGroup()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createGroup$Response(params: {
    body: GroupCreationDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupControllerService.CreateGroupPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createGroup$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createGroup(params: {
    body: GroupCreationDto
  },
  context?: HttpContext

): Observable<GroupViewDto> {

    return this.createGroup$Response(params,context).pipe(
      map((r: StrictHttpResponse<GroupViewDto>) => r.body as GroupViewDto)
    );
  }

  /**
   * Path part for operation updateImage
   */
  static readonly UpdateImagePath = '/groups/{id}/set-image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateImage$Response(params: {
    image: Blob;
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupViewDto> | HttpProgressEvent > {

    const rb = new RequestBuilder(this.rootUrl, GroupControllerService.UpdateImagePath, 'post');
    if (params) {
     
    
      rb.path('id', params.id, {});
    }

    let formData = new FormData();
    formData.append('image', params.image);
    const req = new HttpRequest('POST', `${this.rootUrl}/groups/${params.id}/set-image`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req).pipe(
      filter((r: any) => r instanceof HttpResponse || r.type === HttpEventType.UploadProgress),
      map((r: any) => {
        if ( r.type === HttpEventType.UploadProgress)  {
          return r as HttpProgressEvent;
        }else if( r instanceof HttpResponse){
          return r as StrictHttpResponse<GroupViewDto>;
        } 
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateImage(params: {
    image: Blob;
    id: string;
  },
  context?: HttpContext

): Observable<GroupViewDto | HttpProgressEvent> {

    return this.updateImage$Response(params,context).pipe(
      map((r: any ) =>{
        if(r.body){
          return r.body as GroupViewDto;
        } else if(r.type === HttpEventType.UploadProgress){
          return r;
        }
      })
    );
  }

  /**
   * Path part for operation getById
   */
  static readonly GetByIdPath = '/groups/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GroupViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, GroupControllerService.GetByIdPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: {
    id: string;
  },
  context?: HttpContext

): Observable<GroupViewDto> {

    return this.getById$Response(params,context).pipe(
      map((r: StrictHttpResponse<GroupViewDto>) => r.body as GroupViewDto)
    );
  }

  /**
   * Path part for operation getById1
   */
  static readonly GetByTitlePath = '/groups/withTitle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByTitle$Response(title: string,
  context?: HttpContext

): Observable<StrictHttpResponse<GroupViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, `${GroupControllerService.GetByTitlePath}/${title}`, 'get');
    
    return this.http.request(rb.build({
      responseType: 'json',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GroupViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByTitle(title: string,
  context?: HttpContext

): Observable<GroupViewDto> {

    return this.getByTitle$Response(title, context).pipe(
      map((r: StrictHttpResponse<GroupViewDto>) => r.body as GroupViewDto)
    );
  }

}
