import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksComponent } from './components/home/home.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';

const routes: Routes = [
  {
    path: '',
    component: ArtworksComponent,
  },
  // {
  //   path: 'artwork/:hashId',
  //   component: ArtworkPageComponent,
  // },
  {
    path: '**',
    component: NotFountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
