import { Injectable } from '@angular/core';
import { Observable, combineLatest, of, timer } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Recipe } from '../../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { FilterService } from './filter.service';
import { RecipeFilter } from '../../models/recipefilter.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes$: Observable<Recipe[]> = this.http.get<Recipe[]>(`${environment.apiUrl}/recipes`)
    .pipe(
      retry({
        count: 3,
        delay: (error, count) => {
          console.log(`Error ${error.message} - ${count} `);
          return timer(500);
        }
      }),
      catchError(error => {
        console.log(`The error ${error.message} was not resolved`);
        return of([]);
      })
    );

  filteredRecipes$: Observable<Recipe[]> = combineLatest([this.recipes$, this.filterService.filter$])
    .pipe(
      map(([recipes, filters]: [Recipe[], RecipeFilter]) =>
        this.filterMap(recipes, filters)
      )
    );

  constructor(private filterService: FilterService, private http: HttpClient) {}

  filterMap = (recipes: Recipe[], filters: RecipeFilter): Recipe[] => {
    return recipes.filter((recipe) => this.match(recipe, filters));
  }

  match = (recipe: Recipe, filters: RecipeFilter): boolean => {
    for (let key in filters) {
      if (filters[key]) {
        const recipeValue = recipe[key];
        const filterValue = filters[key];

        if (typeof recipeValue === 'string' && typeof filterValue === 'string') {
          if (!recipeValue.includes(filterValue)) {
            return false;
          }
        } else if (Array.isArray(recipeValue) && typeof filterValue === 'string') {
          if (!recipeValue.includes(filterValue)) {
            return false;
          }
        } else if (recipeValue !== filterValue) {
          return false;
        }
      }
    }
    return true;
  };
}
