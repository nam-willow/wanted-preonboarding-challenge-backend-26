import "reflect-metadata"; // reflect-metadata는 TypeORM에서 필수
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../../src/entity/user.entity"; // 엔티티 임포트
import { Products } from "../../src/entity/product.entity"; // 엔티티 임포트

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  synchronize: false, // 개발 중에만 true (자동 테이블 생성)
  logging: false,
  entities: [User, Products], // 엔티티 등록
});
