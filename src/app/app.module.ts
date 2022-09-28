import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworksComponent } from './components/home/home.component';
import { ArtworkTypesComponent } from './components/artwork-types/artwork-types.component';
import { ArtworksListComponent } from './components/artworks-list/artworks-list.component';
import { ArtworksSearchComponent } from './components/artworks-search/artworks-search.component';
import { ArtworkItemComponent } from './components/artwork-item/artwork-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { UrlInterceptor } from './interceptors/http.interceptor';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NotFountComponent } from './components/not-fount/not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtworksComponent,
    ArtworkTypesComponent,
    ArtworksListComponent,
    ArtworksSearchComponent,
    ArtworkItemComponent,
    UserAvatarComponent,
    NotFountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
