import express, { Request, Response } from "express";
import routes from "./src/controllers/index";
const handlebars = require("express-handlebars");
const app = express();

// 미들웨어 설정
app.engine("handlebars", handlebars.engine()); // 템플릿 엔진으로 핸들바 등록
app.set("view engine", "handlebars"); // 웹페이지 로드 시 사용할 템플릿 엔진 설정
app.set("views", __dirname + "/src/views"); // 뷰 디랙터리를 views로 설정
app.use(routes)

// 라우터 설정
app.get("/", (req: Request, res: Response) => {
    res.render("layouts/main", { title: "안녕하세요", message: "만나서 반갑습니다." });
});

// 서버 시작
app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 시작되었습니다.");
});
