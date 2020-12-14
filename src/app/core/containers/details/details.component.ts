import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogItem} from '../../../shared/models/catalog-item.model';
import { CatalogService } from '../catalog/catalog.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() catalogItem: CatalogItem; //
  constructor(private catalogService: CatalogService) { } //

  ngOnInit(): void {
  }

}
