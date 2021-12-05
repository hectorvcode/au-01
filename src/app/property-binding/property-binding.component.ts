import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  angularImageUrl = 'https://avatars.githubusercontent.com/u/38319490?v=4';
  nameDetails = 'The name is Bond <b>James Bond<b/>';

  constructor() { }
  
  ngOnInit(): void {
  }
  
  
  
}
