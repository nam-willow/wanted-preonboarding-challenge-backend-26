import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// req.body를 사용하려면 json미들웨어를 사용해야 한다.
// 사용하지 않으면 undefined로 반환
app.use(express.json());

let boardList: Array<{
  id: number;
  title: string;
  name: string;
  text: string;
  createdDt: string;
}> = [
  {
    id: 1,
    title: "제목1",
    name: "남정우",
    text: "본문1",
    createdDt: "2024-05-11",
  },
  {
    id: 2,
    title: "제목2",
    name: "남정우",
    text: "본문2",
    createdDt: "2024-05-12",
  },
  {
    id: 3,
    title: "제목3",
    name: "남정우",
    text: "본문3",
    createdDt: "2024-05-13",
  },
  {
    id: 4,
    title: "제목4",
    name: "남정우",
    text: "본문4",
    createdDt: "2024-05-14",
  },
];

// GET 메서드의 라우팅 설정
app.get("/", (req: Request, res: Response) => {
  res.json(boardList);
});

// POST 메서드로 새로운 게시물 추가
app.post("/posts", (req: Request, res: Response) => {
  console.log("length 전: ", boardList.length);
  console.log(req.body);
  const item = {
    id: req.body.id,
    title: req.body.title,
    name: req.body.name,
    text: req.body.text,
    createdDt: req.body.createdDt,
  };
  boardList.push(item);
  console.log("length 후: ", boardList.length);
  res.json(boardList);
});

// DELETE 메서드로 특정 게시물 삭제
app.delete("/posts/:id", (req: Request, res: Response) => {
  console.log("length 전: ", boardList.length);
  const id: number = parseInt(req.params.id, 10);
  boardList = boardList.filter((item) => item.id !== id); // id가 일치하지 않는 항목만 남김
  console.log("length 후: ", boardList.length);
  res.json(boardList);
});

// 이 메서드는 모든 라우팅 및 미들웨어가 설정된 후에 호출 해야함(트리거 역할)
app.listen(port, () => {
  console.log("welcome posts start!");
});
