import { Component, OnInit } from '@angular/core';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  loadedOption = 'catalog';

OnNavigate(option: string){this.loadedOption = option; }

  constructor() { }

  ngOnInit(): void {
  }

}
