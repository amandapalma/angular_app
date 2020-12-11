import { Component, Input, OnInit } from '@angular/core';
import {CatalogItem} from '../../../shared/models/catalog-item.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input()
catalogItem!: CatalogItem;
constructor() { }

ngOnInit(): void {
  }

}
