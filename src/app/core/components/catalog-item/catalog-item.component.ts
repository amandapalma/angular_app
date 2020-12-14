import { Component, Input, OnInit } from '@angular/core';
import {CatalogItem} from '../../../shared/models/catalog-item.model';
import { CatalogService } from '../../containers/catalog/catalog.service';


@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
@Input() catalogItem: CatalogItem;
constructor(private catalogService: CatalogService) { } //


ngOnInit(): void {
  }


onSelected(){
    this.catalogService.itemSelected.emit(this.catalogItem);
  } //
}


