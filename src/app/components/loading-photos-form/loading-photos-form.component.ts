import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';
import { UpdatesServiceService } from 'src/app/services/updates-service.service';

@Component({
  selector: 'app-loading-photos-form',
  templateUrl: './loading-photos-form.component.html',
  styleUrls: ['./loading-photos-form.component.css']
})
export class LoadingPhotosFormComponent implements OnInit {

  constructor(
    private reqService: HttpRequestsService,
    private updatesService: UpdatesServiceService
  ) { }

  ngOnInit(): void {
  }

  onSubmitForm(event: any) {
    event.preventDefault();
    const image = event.target.children[0].files[0];
    const formData = new FormData();
    formData.append('image', image);
    this.reqService.uploadImage(formData).subscribe(data => {
      if (data) {
        this.reqService.getImagesData();
      }

    })
  }
}
