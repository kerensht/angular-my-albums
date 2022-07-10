import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { UpdatesServiceService } from 'src/app/services/updates-service.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  public images: any;
  public photosImagesSub: Subscription = new Subscription();

  constructor(
    private reqService: HttpRequestsService,
    private updatesService: UpdatesServiceService
  ) { }

  ngOnInit(): void {
    this.setSubscriptions();
    this.setImages();
  }

  setSubscriptions() {
    this.photosImagesSub = this.updatesService.updatePhotos.subscribe((data) => {
      this.images = data;
    });
  }

  setImages() {
    this.reqService.getImagesData();
  }

  ngOnDestroy(): void {
    this.photosImagesSub.unsubscribe();
  }

  onDeleteImage(id: string, key: string) {
    this.reqService.deleteImage(id, key).subscribe(res => {
      if (res) {
        this.reqService.getImagesData();
      }
    });
  }
}
