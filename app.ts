import express, { Request, Response } from "express";
import routes from "./src/controllers/index";
const handlebars = require("express-handlebars");
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { AppDataSource } from "./util/database/mysql"; // TypeORM 데이터 소스
// import { ValidationPipe } from "class-validator"; // ValidationPipe 임포트
// import { plainToClass } from "class-transformer"; // class-transformer 임포트

// 환경 변수 로드
dotenv.config();

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(bodyParser.json()); // JSON 요청 본문을 파싱하기 위한 미들웨어 추가
app.use(bodyParser.urlencoded({ extended: false })); // URL-encoded 요청 본문 파싱

// 라우터 사용
app.use(routes);

// TypeORM 데이터베이스 초기화
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");

    // 서버 시작
    app.listen(port, () => {
      console.log(`서버가 ${port}번 포트에서 시작되었습니다.`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
