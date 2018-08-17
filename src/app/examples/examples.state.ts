import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketState } from './stock-market/stock-market.model';

export const FEATURE_NAME = 'examples';

export const reducers: ActionReducerMap<ExamplesState> = {
  todos: todosReducer,
  stockMarket: stockMarketReducer
};

export const selectExamples = createFeatureSelector<any, ExamplesState>(
  FEATURE_NAME
);

export interface ExamplesState {
  todos: TodosState;
  stockMarket: StockMarketState;
}
