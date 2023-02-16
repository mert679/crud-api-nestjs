import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column()
    firstname: string;

    @Column()
    lastname: string;
    @Column()
    email:string;
}




