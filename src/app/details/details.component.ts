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
    const id =  this.route.snapshot.params['id'];
    this.id = id;
    this.titre = this.dataService.getArticles(id).titreArticle;
    this.prix = this.dataService.getArticles(id).prixArticle;
    this.description = this.dataService.getArticles(id).description;
    this.urlImg = this.dataService.getArticles(id).urlImg;
  }
}

