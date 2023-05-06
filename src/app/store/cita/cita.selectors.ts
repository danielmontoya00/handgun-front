import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItems = (state: AppState) => state.citas.entities;

export const getItemById = (id) => createSelector(selectItems, (allItems) => {
  if (allItems) {
    return allItems[id]
  } else {
    return null;
  }
});