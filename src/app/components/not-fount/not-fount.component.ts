import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-fount',
  template: `
    <div class="flex h-screen justify-center items-center flex-col space-y-3">
      <h1 class="text-3xl">404 | Not found</h1>
      <a class="btn btn-primary rounded-md" routerLink=""
        >return to the Home page</a
      >
    </div>
  `,
  styleUrls: ['./not-fount.component.css'],
})
export class NotFountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
