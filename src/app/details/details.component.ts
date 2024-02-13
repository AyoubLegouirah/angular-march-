import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  titre: string;
  prix: number;
  description: string;
  urlImg: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    const article = this.dataService.getArticles(this.id);
    this.titre = article.titreArticle;
    this.prix = article.prixArticle;
    this.description = article.description;
    this.urlImg = article.urlImg;
  }
}

