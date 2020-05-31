import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input() product:any

}
