import { Component, OnInit } from '@angular/core';
import { Photograph } from '../model/models';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public photosArray: Photograph[] = [];
  public photoSelected: Photograph = { id: 0, src: '', title: '' };
  public photoIndex: number = 0;
  constructor(private service: AuthService) {
    this.photosArray = this.service.getPhotosArray();
    this.photoSelected = this.photosArray[this.photoIndex];
  }

  ngOnInit(): void {}

  getPhotoSelected(event: any) {
    const photo = this.photosArray.find(
      (elem) => elem.id.toString() === event.target.id
    );
    if (photo !== undefined) {
      this.photoSelected = photo;
      this.photoIndex = this.photosArray.indexOf(this.photoSelected);
    }
  }

  getPreviusImg() {
    if (this.photoIndex === 0) {
      this.photoSelected;
    } else {
      this.photoSelected = this.photosArray[this.photoIndex - 1];
      this.photoIndex--;
    }
  }
  getNextImg() {
    if (this.photoIndex === this.photosArray.length - 1) {
      this.photoSelected;
    } else {
      this.photoSelected = this.photosArray[this.photoIndex + 1];
      this.photoIndex++;
    }
  }
}
