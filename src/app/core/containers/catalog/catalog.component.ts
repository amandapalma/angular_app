import { Component, OnInit } from '@angular/core';
import {CatalogItem} from '../../../shared/models/catalog-item.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  catalogItems: CatalogItem[] = [new CatalogItem ('mascarilla', 'evita la inhalación de ciertos gases o sustancias', 'https://cdn.pixabay.com/photo/2020/03/24/16/17/mask-4964590_960_720.png'), new CatalogItem ('lavado de manos', 'elimina restos, suciedad y microorganismos', 'https://www.mmhealth.org/wp-content/uploads/Handwashing-Web.jpg')];

constructor() { }

ngOnInit(): void {
  }

}

