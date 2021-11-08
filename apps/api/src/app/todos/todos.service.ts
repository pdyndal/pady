import { Injectable } from '@nestjs/common';

import { Todo } from '@pady/api-interfaces';

@Injectable()
export class TodosService {
  findAll(): Todo[] {
    return [
      {
        id: 1,
        title: 'Todo 1',
        description: 'Todo 1 description',
        done: false
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'Todo 2 description',
        done: false
      }
    ];
  }

  findOne(id: number): Todo {
    return {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      done: false
    };
  }

  create(): Todo {
    return {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      done: false
    };
  }

  update(id: number): Todo {
    return {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      done: false
    };
  }

  remove(id: number) {
    return '';
  }
}
