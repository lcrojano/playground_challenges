import { Injectable } from '@angular/core';
import { RecipeFilter } from '../../models/recipefilter.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  //Action Stream
  private _filter: BehaviorSubject<RecipeFilter> = new BehaviorSubject<RecipeFilter>({
    title: '',
    category: '',
    ingredient: '',
    tags: '',

  });
  readonly filter$ = this._filter.asObservable();

  getFilter(): Observable<RecipeFilter>{
    return this.filter$
  }

  setFilter(filter: RecipeFilter){
    this._filter.next(filter)
  }
}
