import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { UsersController } from './users/users.controller';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'test.db',
    entities: [UserEntity],
    synchronize: true,

  })
    ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
