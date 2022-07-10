import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UpdatesServiceService {

  public updatePhotos = new BehaviorSubject<any>([]);

  constructor() { }

  updatePhotosFetched(data: any[]) {
    this.updatePhotos.next(data)
  }
}
