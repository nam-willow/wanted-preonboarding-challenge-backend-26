import express, { Request, Response } from "express";
import routes from "./src/controllers/index";
const handlebars = require("express-handlebars");
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config(); // 환경 변수 로드

const app = express();
const port = 3000;

// 미들웨어 설정
app.engine("handlebars", handlebars.engine()); // 템플릿 엔진으로 핸들바 등록
app.set("view engine", "handlebars"); // 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set("views", __dirname + "/src/views"); // 뷰 디랙터리를 views로 설정
app.use(bodyParser.json()); // JSON 요청 본문을 파싱하기 위한 미들웨어 추가
app.use(routes); // 라우터 사용

// 라우터 설정
app.get("/", (req: Request, res: Response) => {
  res.render(
    "layouts/main", // 환경 변수
    {
      PORTONE_IMP_CODE: process.env.PORTONE_IMP_CODE,
      CHANNEL_KEY: process.env.CHANNEL_KEY,
    }
  );
}); 
// 서버 시작
app.listen(port, () => {
  console.log("서버가 3000번 포트에서 시작되었습니다.");
});
