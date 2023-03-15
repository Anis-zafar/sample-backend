import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  constructor(
    @Inject('Communication') private readonly communicationClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async createUser(CreateUserRequest: CreateUserRequest) {
    this.users.push(CreateUserRequest);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(CreateUserRequest.email),
    );
  }
}
