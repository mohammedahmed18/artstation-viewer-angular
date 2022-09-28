import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artwork } from 'src/app/interfaces/Artwork';

@Component({
  selector: 'app-artworks-list',
  templateUrl: './artworks-list.component.html',
  styleUrls: ['./artworks-list.component.css'],
})
export class ArtworksListComponent implements OnInit {
  @Input() artworks: Artwork[] = [];
  @Output() loadMore = new EventEmitter();
  emitLoadMore() {
    this.loadMore.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
