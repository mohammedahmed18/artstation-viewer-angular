import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  constructor(private http: HttpClient) {}

  public getArtworks(
    type: String,
    page: Number = 1,
    per_page: Number = 77
  ): Observable<any> {
    return this.http.get(`artworks/${type}?page=${page}&per_page=${per_page}`);
  }
  public getArtwork(hashId: String): Observable<any> {
    return this.http.get(`artwork/${hashId}`);
  }
}
