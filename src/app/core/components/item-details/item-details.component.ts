import { Component, Input, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/shared/models/catalog-item.model';
import { CatalogService } from '../../containers/catalog/catalog.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
// @Input() catalogItem = CatalogItem; //
  constructor(private catalogService: CatalogService) { } //


  ngOnInit(): void {
  }

}
