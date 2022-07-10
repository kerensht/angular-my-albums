import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdatesServiceService } from './updates-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  private URL: string = "http://localhost:3030/";

  constructor(
    private http: HttpClient,
    private updatesService: UpdatesServiceService
  ) { }

  uploadImage(formData: FormData) {
    return this.http.post(
      this.URL + 'upload-image',
      formData
    );
  }

  getImagesData = () => {
    this.http.get(
      this.URL + 'get-images'
    ).subscribe(data => {
      if (data) {
        this.updatesService.updatePhotosFetched(data as Array<any>);
      }
    })
  }

  deleteImage = (id: string, key: string) => {
    return this.http.delete(
      this.URL + 'delete-image',
      { body: { id, key } }
    )
  }
}
