import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from '../../core/services/filter.service';

@Component({
  selector: 'mag-recipes-filter',
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecipesFilterComponent {
  recipeForm!: FormGroup
  constructor( private fb: FormBuilder, private filterService: FilterService) {
    this.recipeForm = fb.group({
      title: [''],
      category: [''],
      ingredient: [''],
      tags: [''],
      prepTime: [''],
      cookingTime: ['']
    })
  }
  clearFilter() {
    this.recipeForm.reset()
  }
filterResults() {
  this.filterService.setFilter(this.recipeForm.value)
 }

}
