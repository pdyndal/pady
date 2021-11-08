import { Todo } from './todos.interfaces';

export interface Users {
  id: number;
  name: string;
  surname: string;
  todos: Todo[]
}
