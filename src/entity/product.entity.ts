import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "int", nullable: false })
  user_id: number;

  @Column({ type: "int", nullable: false, default: 1 })
  stock: string;

  @Column({ type: "varchar", nullable: false })
  color: string;

  @Column({ type: "varchar", nullable: true })
  size: string;

  @Column({ type: "varchar", nullable: false })
  amount: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "int", nullable: false })
  status: number;

  @Column({ type: "timestamp", nullable: false })
  create_date: string;

  constructor(
    id: number,
    user_id: number,
    stock: string,
    color: string,
    size: string,
    amount: string,
    name: string,
    status: number,
    create_date: string
  ) {
    this.id = id;
    this.user_id = user_id;
    this.stock = stock;
    this.color = color;
    this.size = size;
    this.amount = amount;
    this.name = name;
    this.status = status;
    this.create_date = create_date;
  }
}
