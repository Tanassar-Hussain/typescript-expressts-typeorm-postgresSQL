import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Profile } from "./Profile";


@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName : string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @OneToOne(()=>Profile , {cascade : true, eager: true, onDelete: "CASCADE"}) //OnDelete Cascade means when user profile is deleted user will also be deleted...
    @JoinColumn()
    profile: Profile;
}