// import { NOTFOUND } from "dns";
// import { userInfo } from "os";
// import { Z_FILTERED } from "zlib";

// const http = require("http");
// const url = require("url"); // url 모듈을 로딩

// http
//   .createServer((req: any, res: any) => {
//     const path = url.parse(req.url, true).pathname;
//     res.setHeader("Content-Type", "text/html; charset=utf-8");

//     if (path === "/user") {
//       user(req, res);
//     } else if (path === "/feed") {
//       feed(req, res);
//     } else {
//       notFound(req, res);
//     }
//   })
//   .listen("3000", () => {
//     console.log("라우터를 만들어보자 - 리팩터링!");
//   });

// const user = (req: any, res: any) => {
//   const userInfo = url.parse(req.url, true).query;
//   res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
// };

// const feed = (req: any, res: any) => {
//   res.end(`<ul>
//         <li> picture1 </li>
//         <li> picture2 </li>
//         <li> picture3 </li>
//         </ul>`); // /feed에 대한 결과값 설정
// };

// const notFound = (req: any, res: any) => {
//   res.statusCode = 404;
//   res.end(`404 page not found`);
// };
