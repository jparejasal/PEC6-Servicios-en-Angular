import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleServiceService } from './services/article-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './articles/article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './articles/article-new-reactive/article-new-reactive.component';
import { imagenURLPipe } from './articles/imagenURL.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    imagenURLPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    ArticleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
