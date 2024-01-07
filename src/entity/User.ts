import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, })
    name: string

    @Column({ length: 150, })
    password: string

    @Column({ length: 70, })
    email: string

    @Column({ default: true })
    active: boolean
}