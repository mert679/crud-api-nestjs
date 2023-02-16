import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(UserEntity) private repo: Repository<UserEntity>) {}
  
  async create(createUserDto: CreateUserDto):Promise<UserEntity> {
    const user = new UserEntity();
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.email = createUserDto.email;
    
    return await this.repo.save(user) 

  }

  async findAll():Promise<UserEntity[]> {
    return await this.repo.find();
  }

  async findOne(id: number):Promise<UserEntity> {
    return await this.repo.findOne({
      select:['id','firstname','lastname',"email"],
      where:{id}
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<UserEntity> {
    const user = await this.repo.findOne({
      select:['id','firstname','lastname',"email"],
      where:{id}
    });
    user.firstname = updateUserDto.firstName
    user.lastname = updateUserDto.lastName
    user.email = updateUserDto.email


    return await this.repo.save(user)
  }

  async remove(id: number): Promise<void>  {
    await this.repo.delete(id);
  }
}
