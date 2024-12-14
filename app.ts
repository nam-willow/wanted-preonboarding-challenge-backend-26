import express, { Request, Response } from "express";
import routes from "./src/controllers/index";
const handlebars = require("express-handlebars");
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config(); // 환경 변수 로드

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(routes); // 라우터 사용
app.use(bodyParser.json()); // JSON 요청 본문을 파싱하기 위한 미들웨어 추가


// 서버 시작
app.listen(port, () => {
  console.log("서버가 3000번 포트에서 시작되었습니다.");
});
