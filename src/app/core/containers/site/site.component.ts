import { Component, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/shared/models/catalog-item.model';
import { CatalogService } from '../catalog/catalog.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
  providers: [CatalogService]
})
export class SiteComponent implements OnInit {
  catalogItems: CatalogItem[];
  selectedItem: CatalogItem; //

  constructor( private catalogService: CatalogService) { } //

  ngOnInit(){
    this.catalogService.itemSelected.subscribe((catalogItem: CatalogItem) => {this.selectedItem = catalogItem; } );
  } //

}
