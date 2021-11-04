import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '@pady/api-interfaces';

@Controller('todos')
export class TodosController {

  constructor(
    private _todoService: TodosService
  ) {}

  @Get()
  findAll(): Todo[] {
    return this._todoService.findAll();
  }

  @Get('/:id')
  findOne(id: number): Todo {
    return this._todoService.findOne(id);
  }

  @Post()
  create(): Todo {
    return this._todoService.create();
  }

  @Put('/:id')
  update(id: number): Todo {
    return this._todoService.update(id);
  }

  @Delete('/:id')
  remove(id: number) {
    return this._todoService.remove(id);
  }

}
