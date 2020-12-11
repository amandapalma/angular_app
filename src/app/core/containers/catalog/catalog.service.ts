import { Injectable } from '@angular/core';
import {CatalogItem} from '../../../shared/models/catalog-item.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
 private catalogItems: CatalogItem[] = [new CatalogItem ('mascarilla', 'evita la inhalación de ciertos gases o sustancias', 'https://cdn.pixabay.com/photo/2020/03/24/16/17/mask-4964590_960_720.png'), new CatalogItem ('lavado de manos', 'elimina restos, suciedad y microorganismos', 'https://www.mmhealth.org/wp-content/uploads/Handwashing-Web.jpg')];


  constructor() { }


  getCatalogItems(){
    return this.catalogItems.slice();   // we get a copy of the original array, we don´t modify it
  }
}
