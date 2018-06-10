import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  articles:text;

  constructor(public navCtrl: NavController,
              private articlesProvider: ArticlesProvider) {

    articlesProvider.getArticles().subscribe(results => {
      this.articles = results.article;
    });
  }
}
