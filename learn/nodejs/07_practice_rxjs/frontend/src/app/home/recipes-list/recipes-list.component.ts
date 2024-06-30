import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesService } from '../../core/services/recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
@Component({
  selector: 'mag-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})


export class RecipesListComponent {
  //Define data streams
  recipes$: Observable<Recipe[]> = this.recipesService.filteredRecipes$

  //Define action streams
  constructor(private recipesService: RecipesService){

  }

  trackByFn() {
    return (index: number, item: Recipe) => item.id;
  }

}
