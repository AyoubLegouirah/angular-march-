import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      id : 1,
      titreArticle: 'Velo',
      prixArticle: 80,
      description: 'Un vélo pour se déplacer',
      urlImg: "../assets/velo.jpeg",
      textAltImg: "Vélo",
      dispo: false
    },
    {
      id : 2,
      titreArticle: 'Tv',
      prixArticle: 280,
      description: 'Une grosse TV',
      urlImg: "../assets/tv.avif",
      textAltImg: "TV",
      dispo: true
    },
    {
      id : 3,
      titreArticle: 'Jouet',
      prixArticle: 20,
      description: 'Un jouet pour s\'amuser',
      urlImg: "../assets/jouet.avif",
      textAltImg: "jouet",
      dispo: true
    },

  ]
  constructor() { }

  getArticles(id: number){
    const article = this.listeArticles.find((a) => {  
      return a.id === id;
    });
    return article;
  }
}
