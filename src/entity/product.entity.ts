import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", nullable: true, default: 1 })
  stock: string;

  @Column({ type: "varchar", nullable: true })
  color: string;

  @Column({ type: "varchar", nullable: true })
  size: string;

  @Column({ type: "varchar", nullable: false })
  amount: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "timestamp", nullable: false })
  createDate: string;

  constructor(
    id: number,
    stock: string,
    color: string,
    size: string,
    amount: string,
    name: string,
    createDate: string
  ) {
    this.id = id;
    this.stock = stock;
    this.color = color;
    this.size = size;
    this.amount = amount;
    this.name = name;
    this.createDate = createDate;
  }
}
