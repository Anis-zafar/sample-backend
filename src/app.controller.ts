import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateUserRequest } from './create-user-request.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async createUser(@Body() CreateUserRequest: CreateUserRequest) {
    return this.appService.createUser(CreateUserRequest);
  }
}
