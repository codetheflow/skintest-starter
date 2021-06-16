import { has, I, perform, Recipe, recipe, RepeatRead, till } from '@skintest/sdk';
import { todos } from '../components/todos';
import { add_todo } from './add-todo';

function add_next_todo(current: RepeatRead): Promise<Recipe> {
  const { index } = current.return();
  return add_todo(`generate todo #${index}`)
}

/**
 * generate todo times and put them to the list of todos
 * 
 * @param count number of items to generate
 * @returns generate todos client recipe
 */
export async function generate_todos(count: number): Promise<Recipe> {
  return recipe(
    perform('add todo'
      , I.do(add_next_todo, till.yield)
      , till(`list has ${count} items`)
      , I.see(todos.list, has.no.length, count)
    )
  );
}