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

import { ListWrapperString } from '../models/list-wrapper-string';

@Injectable({
  providedIn: 'root',
})
export class ContactControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTypes
   */
  static readonly GetTypesPath = '/contacts/types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypes$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ListWrapperString>> {

    const rb = new RequestBuilder(this.rootUrl, ContactControllerService.GetTypesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListWrapperString>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypes(params?: {
  },
  context?: HttpContext

): Observable<ListWrapperString> {

    return this.getTypes$Response(params,context).pipe(
      map((r: StrictHttpResponse<ListWrapperString>) => r.body as ListWrapperString)
    );
  }

}
