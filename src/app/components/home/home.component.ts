import { Component, OnInit } from '@angular/core';
import { Artwork } from 'src/app/interfaces/Artwork';
import { ArtworksService } from 'src/app/services/artworks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class ArtworksComponent implements OnInit {
  artworks: Artwork[] = [];
  page: number = 0;

  loading: Boolean = false;
  types: String[] = ['trending', 'community', 'latest'];
  currentTypeIndex: number = 0;
  constructor(private artworksService: ArtworksService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    console.log('start loading');
    this.page++;
    this.loading = true;

    const type = this.types[this.currentTypeIndex];

    this.artworksService.getArtworks(type, this.page).subscribe((res: any) => {
      this.loading = false;
      this.artworks = [...this.artworks, ...res.data];
    });
  }

  setType(type: String) {
    const index = this.types.indexOf(type);
    this.currentTypeIndex = index;
    this.page = 0;
    this.artworks = [];
    this.loadMore();
  }
}
