/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ArticleCreationDto } from '../models/article-creation-dto';
import { ArticleViewDto } from '../models/article-view-dto';
import { ListWrapperArticleViewDto } from '../models/list-wrapper-article-view-dto';

@Injectable({
  providedIn: 'root',
})
export class ArticleControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll1
   */
  static readonly GetAll1Path = '/articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ListWrapperArticleViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleControllerService.GetAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListWrapperArticleViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll1(params?: {
  },
  context?: HttpContext

): Observable<ListWrapperArticleViewDto> {

    return this.getAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<ListWrapperArticleViewDto>) => r.body as ListWrapperArticleViewDto)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/articles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    body: ArticleCreationDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ArticleViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleControllerService.CreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    body: ArticleCreationDto
  },
  context?: HttpContext

): Observable<ArticleViewDto> {

    return this.create$Response(params,context).pipe(
      map((r: StrictHttpResponse<ArticleViewDto>) => r.body as ArticleViewDto)
    );
  }

  /**
   * Path part for operation updateImage1
   */
  static readonly UpdateImage1Path = '/articles/{id}/set-image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateImage1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateImage1$Response(params: {
    image: Blob;
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ArticleViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleControllerService.UpdateImage1Path, 'post');
    if (params) {
      rb.query('image', params.image, {});
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateImage1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateImage1(params: {
    image: Blob;
    id: string;
  },
  context?: HttpContext

): Observable<ArticleViewDto> {

    return this.updateImage1$Response(params,context).pipe(
      map((r: StrictHttpResponse<ArticleViewDto>) => r.body as ArticleViewDto)
    );
  }

  /**
   * Path part for operation get
   */
  static readonly GetPath = '/articles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ArticleViewDto>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleControllerService.GetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ArticleViewDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: {
    id: string;
  },
  context?: HttpContext

): Observable<ArticleViewDto> {

    return this.get$Response(params,context).pipe(
      map((r: StrictHttpResponse<ArticleViewDto>) => r.body as ArticleViewDto)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/articles/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ArticleControllerService.DeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
