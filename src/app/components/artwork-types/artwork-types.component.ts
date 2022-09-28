import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-artwork-types',
  template: `
    <div class="py-4 inline-block relative mx-4">
      <div
        class="bar"
        [ngStyle]="{
          left: currentIndex * unit + '%',
          width: unit + '%'
        }"
      ></div>
      <ul class="flex text-center">
        <li
          *ngFor="let type of types; index as i"
          class="text-lg text-center p-3 cursor-pointer w-40"
          [ngClass]="i == currentIndex ? 'active' : null"
          (click)="setType(type)"
        >
          {{ type }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./artwork-types.component.css'],
})
export class ArtworkTypesComponent implements OnInit {
  @Input() currentIndex: number = 0;
  @Input() types: String[] = [];
  @Output() handleTypeSelect = new EventEmitter();
  unit: number = 0;
  constructor() {}

  setType(type: String) {
    this.handleTypeSelect.emit(type);
  }

  ngOnInit(): void {
    this.unit = 100 / this.types.length;
  }
}
