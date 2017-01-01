import { Component, OnInit } from '@angular/core';

import { NewTutorialComponent } from '../new-tutorial/new-tutorial.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  addTutorial(){
    //new NewTutorialComponent();
  }

  ngOnInit() {
  }

}
