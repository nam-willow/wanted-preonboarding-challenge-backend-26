// import express, { Request, Response } from "express";
// const app = express();
// const port = 3000;

// // 올바른 구조
// // 1. app.use: 필요한 미들웨어 추가
// // 2. app.get, app.post:  라우팅 정의
// // 3. app.listen 호출로 서버 시작

// // GET 메서드의 라우팅 설정
// app.get("/", (req: Request, res: Response) => {
//   res.end("HOME");
// });
// app.get("/user", user);
// app.get("/feed", feed);

// function user(req: Request, res: Response) {
//   const user = req.query;
//   //  const user = url.parse(req.url, true).query;
//   res.json(`[user] name: ${user.name}, age: ${user.age}`);
// }

// // /feed로 요청이 오면 실행 되는 함수
// function feed(req: Request, res: Response) {
//   res.json(`<ul>
//             <li> picture1 </li>
//             <li> picture2 </li>
//             <li> picture3 </li>
//             </ul>`); // /feed에 대한 결과값 설정
// }

// // 이 메서드는 모든 라우팅 및 미들웨어가 설정된 후에 호출 해야함(트리거 역할)
// app.listen(port, () => {
//   console.log("익스프레스로 라우터 리팩터링 하기");
// });
