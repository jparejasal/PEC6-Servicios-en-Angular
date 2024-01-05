import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleNewTemplateComponent } from './articles/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  {path:'', redirectTo:'Articulos', pathMatch:'full'},
  {path:'Articulos', component:ArticleListComponent},
  {path:'crearArticuloTemplate', component:ArticleNewTemplateComponent},
  {path:'crearArticuloReactive', component:ArticleNewReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
