import { Component, Input, OnInit } from '@angular/core';
import { artwork as defaultArtwork } from 'src/app/default/artwork';
import { Artwork } from 'src/app/interfaces/Artwork';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css'],
})
export class ArtworkItemComponent implements OnInit {
  @Input() artwork: Artwork = defaultArtwork;
  active: Boolean = false;
  showAdultContent: Boolean = false;
  constructor() {}

  toggleActive($event: Event) {
    this.active = $event.type == 'mouseover' ? true : false;
  }
  showAdultArtwork = ($event: Event) => {
    $event.preventDefault();
    $event.stopPropagation();
    this.showAdultContent = true;
  };
  ngOnInit(): void {}
}
