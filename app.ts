import express, { Request, Response } from "express";
const handlebars = require("express-handlebars");
const app = express();

// 미들웨어 설정
app.engine("handlebars", handlebars.engine()); // 템플릿 엔진으로 핸들바 등록
app.set("view engine", "handlebars"); // 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set("views", __dirname + "/views"); // 뷰 디랙터리를 views로 설정

// 라우터 설정
app.get("/", (req: Request, res: Response) => {
  // 컨트롤러로 넘어가는 내용 추가하기
});
