import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'garam-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  name = 'GoldGaram.Com';
  lists = ['Gold', 'Garam']

  constructor() { }

  ngOnInit(): void {
  }

}
