import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'crypto';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-member-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    console.log(body);
    const  {name, 'function': memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
