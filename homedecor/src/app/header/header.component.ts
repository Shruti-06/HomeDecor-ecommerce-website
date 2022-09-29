import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  myCategories = ['Sofa', 'Chair', 'Wall art', 'Dining', 'Table'];

  constructor() { }

  ngOnInit(): void {
  }

}
