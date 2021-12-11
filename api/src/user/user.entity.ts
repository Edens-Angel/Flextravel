import { Exclude } from 'class-transformer'
import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true,
        nullable: false,
    })
    username: string

    @Column({
        nullable: false,
        unique: false,
    })
    firstName: string

    @Column({
        nullable: false,
        unique: false,
    })
    lastName: string

    @Exclude()
    @Column({
        nullable: false,
        unique: false,
    })
    password: string
}
