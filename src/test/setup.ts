import { AppDataSource } from "../../util/database/mysql"; // TypeORM 데이터 소스

beforeAll(async () => {
  // TypeORM 데이터베이스 초기화
  await AppDataSource.initialize();
});

afterAll(async () => {
  // TypeORM 연결 종료
  await AppDataSource.destroy();
});
