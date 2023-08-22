import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GroupControllerService } from '../api/services';
import { GroupViewDto } from '../api/models';

@Injectable({
  providedIn: 'root'
})
export class GroupResolver implements Resolve<GroupViewDto> {


  constructor (private groupService: GroupControllerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GroupViewDto> {
    let groupId = route.params.id;
    return this.groupService.getById({id: groupId});
  }
}
