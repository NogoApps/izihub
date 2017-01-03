import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'Tour of Heroes';
  article: string = 'Once upon a time, that live in a small house Once upon a time, that live in a small house'+'...';
  verifiedTag = 'Verified';
  notSureTag = 'Not sure';
}
