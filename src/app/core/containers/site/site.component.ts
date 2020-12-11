import { Component, OnInit } from '@angular/core';
import { CatalogItem } from 'src/app/shared/models/catalog-item.model';
import { CatalogService } from '../catalog/catalog.service';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
  providers: [CatalogService]
})
export class SiteComponent implements OnInit {
  catalogItems!: CatalogItem[];
//   loadedOption = 'catalog';

// OnNavigate(option: string){this.loadedOption = option; }

  constructor() { }

  ngOnInit(): void {
  }

}
