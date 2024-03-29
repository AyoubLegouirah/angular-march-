import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListeComponent } from './liste/liste.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';


const routes: Routes = [
  {path: "", component: ListeComponent},
  {path: "ajouter", component: AjouterComponent},
  {path: "liste", redirectTo: ""},
  {path: "details/:id", component: DetailsComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
