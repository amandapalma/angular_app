import { Component, OnInit } from '@angular/core';
import {CatalogItem} from '../../../shared/models/catalog-item.model';
import {CatalogService} from '../catalog/catalog.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],

})
export class CatalogComponent implements OnInit {
catalogItems: CatalogItem [];


constructor(private catalogService: CatalogService) { }

ngOnInit() {
  this.catalogItems = this.catalogService.getCatalogItems();
  }

}
