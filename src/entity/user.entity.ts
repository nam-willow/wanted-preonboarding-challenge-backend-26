import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", nullable: true })
  phone: string;

  @Column({ type: "varchar", nullable: true })
  address: string;

  @Column({ type: "varchar", nullable: true })
  postcode: string;

  @Column({ type: "timestamp", nullable: false })
  create_date: string;

  constructor(
    id: number,
    email: string,
    password: string,
    name: string,
    phone: string,
    address: string,
    postcode: string,
    create_date: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.postcode = postcode;
    this.create_date = create_date;
  }
}
