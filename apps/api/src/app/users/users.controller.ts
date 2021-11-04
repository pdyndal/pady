import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get('/:id')
  findOne(id: string): string {
    return `This action returns a #${id} user`;
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }

  @Put('/:id')
  update(id: string): string {
    return `This action updates a #${id} user`;
  }

  @Delete('/:id')
  remove(id: string): string {
    return `This action removes a #${id} user`;
  }

}
