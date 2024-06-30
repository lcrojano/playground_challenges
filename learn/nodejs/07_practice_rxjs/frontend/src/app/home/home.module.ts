import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesFilterComponent } from './recipes-filter/recipes-filter.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


const routes: Route[] = [
  {
    path:"", component: HomeComponent
  }
]
@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesFilterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DataViewModule,
    RouterModule.forChild(routes),
    RatingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }
